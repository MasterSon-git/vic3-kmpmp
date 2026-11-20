const { parse } = require('./clausewitz-parser.cjs');

// Direct modifier blocks in the game's common/<database> schemas. PMs have
// an additional recipient and scaling level. Other fields are opaque.
const bloc = 'power_bloc_modifier participant_modifier member_modifier leader_modifier';
const pm = ['building_modifiers', 'state_modifiers', 'country_modifiers'].flatMap(recipient =>
    ['workforce_scaled', 'level_scaled', 'unscaled'].map(scale => recipient + '/' + scale));
const containers = {
    battle_conditions: 'modifier', character_traits: 'command_modifier',
    combat_unit_types: 'battle_modifier formation_modifier upkeep_modifier',
    commander_orders: 'modifier', company_types: 'prosperity_modifier', country_ranks: 'modifier',
    decrees: 'modifier', institutions: 'modifier', interest_group_traits: 'modifier',
    laws: 'modifier institution_modifier', mobilization_options: 'unit_modifier upkeep_modifier upkeep_modifier_unscaled',
    power_bloc_identities: bloc, power_bloc_principles: bloc + ' institution_modifier',
    production_methods: pm.join(' '), ship_types: 'modifier distance_to_port_modifier construction_goods materiel_goods',
    state_traits: 'modifier', static_modifiers: '', 'technology/technologies': 'modifier',
    treaty_articles: 'source_modifier target_modifier mutual_modifier',
};
const databases = [...Object.keys(containers), 'modifier_type_definitions'];
function numericPath(id, path, types) {
    const db = id.slice(0, id.lastIndexOf('/'));
    const parts = path.split('/');
    const key = parts.pop();
    return !!key && containers[db]?.split(' ').includes(parts.join('/')) &&
        (db !== 'static_modifiers' || types.has(key)) && !types.get(key) && !key.endsWith('_bool');
}
const modes = /^(?:(INJECT|TRY_INJECT|INJECT_OR_CREATE|REPLACE|TRY_REPLACE|REPLACE_OR_CREATE):)?([\w.-]+)$/;
const injects = mode => mode.includes('INJECT');
const union = (...sets) => new Set(sets.flatMap(set => [...set]));

// Keep literal contributions exact. Higher precision and expressions need review.
function fixed(value) {
    if (typeof value !== 'string' && typeof value !== 'number') return undefined;
    const m = /^([+-]?)(\d*)(?:\.(\d{0,6}))?$/.exec(String(value));
    if (!m || (!m[2] && !m[3])) return undefined;
    const scaled = BigInt(m[2] + (m[3] || '').padEnd(6, '0'));
    return m[1] === '-' ? -scaled : scaled;
}
function display(value) {
    if (typeof value !== 'bigint') return value ?? '?';
    const digits = (value < 0n ? -value : value).toString().padStart(7, '0');
    return (value < 0n ? '-' : '') + (digits.slice(0, -6) + '.' + digits.slice(-6)).replace(/\.?0+$/, '');
}

function readEntries(files, mod) {
    const result = new Map();
    for (const [file, source] of files) {
        const db = databases.find(name => file.startsWith('common/' + name + '/'));
        if (!db) continue;
        try {
            const entries = [];
            for (const node of parse(source)) {
                if (node.key === 'inline_script') {
                    entries.push({ db, file, mod, issue: 'file-level inline script may supply definitions' });
                    continue;
                }
                if (!node.children || node.key.startsWith('@')) continue;
                const match = modes.exec(node.key);
                if (!match || node.operator !== '=') {
                    entries.push({ db, file, mod, issue: 'unrecognized entry syntax for ' + node.key });
                    continue;
                }
                entries.push({ db, id: db + '/' + match[2], mode: match[1] || 'CREATE', node, file, mod });
            }
            result.set(file, entries);
        } catch (err) { throw new Error(file + ': ' + err.message); }
    }
    return result;
}

// A same-path file masks the entire earlier file. Within a database process
// entries in filename order, retaining the active full definition and injections.
function resolve(files, legacy) {
    const definitions = new Map();
    const types = new Map();
    const databaseIssues = new Map();
    const order = [...files.keys()].sort((a, b) => {
        const depth = a.split('/').length - b.split('/').length;
        return depth || Buffer.compare(Buffer.from(a), Buffer.from(b));
    });
    for (const file of order) for (const entry of files.get(file)) {
        if (entry.issue) {
            if (!databaseIssues.has(entry.db)) databaseIssues.set(entry.db, new Set());
            databaseIssues.get(entry.db).add(file + ': ' + entry.issue);
            continue;
        }
        const { id, mode } = entry;
        if (!definitions.has(id)) definitions.set(id, { layers: [], issues: [], modEntries: [] });
        const def = definitions.get(id);
        if (entry.mod) def.modEntries.push(entry);
        if (def.layers.length && mode === 'CREATE' && !legacy) {
            def.issues.push(file + ': conflicting unprefixed definition');
        } else if (!def.layers.length && mode !== 'CREATE' && !mode.endsWith('_OR_CREATE')) {
            if (!mode.startsWith('TRY_')) def.issues.push(file + ': missing target for ' + mode);
            continue;
        }
        if (!injects(mode)) def.layers = [];
        def.layers.push(entry);
        if (entry.db === 'modifier_type_definitions') {
            const key = id.slice('modifier_type_definitions/'.length);
            if (!types.has(key) || !injects(mode)) types.set(key, false);
            const flag = entry.node.children.find(child => child.key === 'boolean');
            if (flag) types.set(key, flag.value === 'yes');
        }
    }
    return { definitions, types, databaseIssues };
}

// Preserve a repeated or non-literal field as one opaque subtree. In
// particular, never interpret an omitted descendant underneath it as zero.
function project(entry, types) {
    const paths = containers[entry.db].split(' ');
    const fields = new Map();
    function visit(nodes, parent) {
        for (const [key, siblings] of groupByKey(nodes)) {
            const p = parent ? parent + '/' + key : key;
            const [node] = siblings;
            const single = siblings.length === 1 && node.operator === '=';
            const container = paths.some(c => c === p || c.startsWith(p + '/'));
            // A scripted block inside a modifier list may supply other keys.
            const scripted = paths.includes(p) && node.children?.some(child => child.children || !child.operator);
            if (single && node.children && container && !scripted) {
                visit(node.children, p);
                continue;
            }
            const modifier = paths.includes(parent) && (entry.db !== 'static_modifiers' || types.has(key));
            const number = fixed(node.value);
            let kind = 'opaque', value = JSON.stringify(siblings);
            if (modifier && single && !node.children) {
                if (['yes', 'no'].includes(node.value)) {
                    kind = 'flag'; value = node.value;
                } else if (number !== undefined && !types.get(key) && !key.endsWith('_bool')) {
                    kind = 'number'; value = number;
                }
            }
            const summary = siblings.length > 1 ? '<repeated x' + siblings.length + '>' :
                node.children ? '<block>' : String(node.value ?? '<item>').slice(0, 48);
            fields.set(p, { kind, value, summary, file: entry.file, modifier: modifier || container });
        }
    }
    visit(entry.node.children, '');
    return fields;
}

function groupByKey(nodes) {
    const groups = new Map();
    for (const node of nodes) {
        if (!groups.has(node.key)) groups.set(node.key, []);
        groups.get(node.key).push(node);
    }
    return groups;
}

function fieldAt(fields, path) {
    for (let p = path; p; p = p.slice(0, Math.max(0, p.lastIndexOf('/')))) {
        if (fields.has(p)) return fields.get(p);
    }
}

function view(definition, types) {
    const layers = (definition?.layers || []).map(entry => ({ ...entry, fields: project(entry, types) }));
    const modEntries = (definition?.modEntries || []).map(entry => ({ ...entry, fields: project(entry, types) }));
    const issues = [...(definition?.issues || [])];
    for (const layer of layers) {
        if (layer.node.children.some(node => node.key === 'inline_script')) issues.push(layer.file + ': inline script in definition');
    }
    const paths = union(...layers.map(layer => layer.fields.keys()));
    // INJECT_OR_CREATE with a missing target supplies the initial definition.
    const full = layers[0];
    const injections = layers.filter(layer => layer.mod && injects(layer.mode));
    function at(path) {
        let vanilla = 0n, base = 0n, delta = 0n;
        const inherited = [], added = [];
        const vanillaParts = [];
        for (const layer of layers) {
            const field = fieldAt(layer.fields, path);
            if (!field) continue;
            const part = layer.file + ':' + layer.mode + '=' + String(field.value);
            if (!layer.mod) vanillaParts.push(part);
            if (layer.mod && layer !== full) added.push(field);
            else inherited.push(field);
            if (field.kind !== 'number') continue;
            if (!layer.mod) vanilla += field.value;
            else if (layer !== full) delta += field.value;
            else base += field.value;
        }
        const numeric = !issues.length && [...inherited, ...added].every(field => field.kind === 'number');
        const total = numeric ? vanilla + base + delta : undefined;
        const modParts = modEntries.flatMap(entry => {
            const field = fieldAt(entry.fields, path);
            // A replacement also changes inheritance for keys it omits.
            return field || !injects(entry.mode) ? [entry.file + ':' + entry.mode + '=' + String(field?.value)] : [];
        });
        return { vanilla, base, delta, total, inherited, added, modParts: modParts.join('|'), vanillaParts: vanillaParts.join('|') };
    }
    return { layers, paths, full, injections, issues, at };
}

// Compare structural paths, including opaque lists and repeated clauses. No
// execution or equivalence claim is involved in the full-replacement check.
function rawFields(nodes, parent = '', result = new Map()) {
    for (const [key, siblings] of groupByKey(nodes)) {
        const p = parent ? parent + '/' + key : key;
        const [node] = siblings;
        if (siblings.length === 1 && node.operator === '=' && node.children?.length && node.children.every(child => child.operator)) {
            rawFields(node.children, p, result);
        } else result.set(p, JSON.stringify(siblings));
    }
    return result;
}

function build(vanillaFiles, modFiles, legacy = false) {
    const vanilla = resolve(vanillaFiles, legacy);
    const loaded = resolve(new Map([...vanillaFiles, ...modFiles]), legacy);
    return { vanilla, loaded, modFiles, modIds: new Set([...modFiles.values()].flat().map(entry => entry.id).filter(Boolean)) };
}

module.exports = { build, databases, display, fixed, numericPath, rawFields, readEntries, union, view };
