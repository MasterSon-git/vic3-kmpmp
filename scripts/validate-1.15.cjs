// Read-only static compatibility checks. Requires Node.js 18+.
// node scripts/validate-1.15.cjs "C:/.../Victoria 3/game"
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const game = path.resolve(process.argv[2] || 'C:/Program Files (x86)/Steam/SteamApps/common/Victoria 3/game');
const read = file => fs.readFileSync(file, 'utf8');
const files = dir => fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry =>
    entry.isDirectory() ? files(path.join(dir, entry.name)) : [path.join(dir, entry.name)]) : [];

// Tokens retain offsets so quoted strings and comments cannot masquerade as code.
function tokens(source) {
    const pattern = /#[^\r\n]*|"(?:\\.|[^"\\])*"|[{}]|[=<>!?]+|[^\s{}=<>!?#"\uFEFF]+/g;
    return [...source.matchAll(pattern)].filter(match => !match[0].startsWith('#'))
        .map(match => ({ value: match[0], offset: match.index }));
}
function parse(source) {
    const input = tokens(source);
    let position = 0;
    function block(nested = false) {
        const entries = [];
        while (position < input.length) {
            const token = input[position++];
            if (token.value === '}') {
                assert(nested, `Unexpected closing brace at ${token.offset}`);
                return entries;
            }
            if (token.value === '{') {
                entries.push({ key: '', children: block(true) });
                continue;
            }
            const node = { key: token.value };
            if (/^[=<>!?]+$/.test(input[position]?.value || '')) {
                node.operator = input[position++].value;
                const value = input[position++];
                assert(value, `Missing value for ${node.key}`);
                node.value = value.value;
                if (node.value === '{') node.children = block(true);
            }
            entries.push(node);
        }
        assert(!nested, 'Unclosed block');
        return entries;
    }
    return block();
}
const key = node => node.key.replace(/^(REPLACE_OR_CREATE|REPLACE|INJECT|TRY_INJECT):/, '');
const field = (node, name) => node?.children?.find(child => child.key === name);
const value = (node, name) => field(node, name)?.value?.replace(/^"|"$/g, '');
const flags = node => field(node, 'flags')?.children?.map(child => child.key) || [];
function index(directory) {
    const result = new Map();
    for (const file of files(directory).filter(file => file.endsWith('.txt'))) {
        for (const node of parse(read(file))) if (node.children) {
            const previous = result.get(key(node));
            if (/^(?:TRY_)?INJECT:/.test(node.key) && previous) {
                result.set(key(node), { ...node, children: [
                    ...previous.children.filter(old => !node.children.some(child => child.key === old.key)),
                    ...node.children,
                ] });
            } else result.set(key(node), node);
        }
    }
    return result;
}
let checks = 0;
function check(name, action) {
    try {
        action();
        checks++;
        console.log(`PASS ${name}`);
    } catch (error) {
        console.error(`FAIL ${name}: ${error.message}`);
        process.exitCode = 1;
    }
}
assert(fs.existsSync(path.join(game, 'common')), `Game directory does not exist: ${game}`);
check('all variants target 1.15.1', () => {
    for (const name of ['metadata_kmpmp', 'metadata_kmpmp_test', 'metadata_kspmp']) {
        assert.equal(JSON.parse(read(path.join(root, 'src/.metadata', name + '.json'))).supported_game_version, '1.15.1');
    }
});
const scriptFiles = ['src', 'src_test'].flatMap(variant => ['common', 'events', 'map_data'].flatMap(directory =>
    files(path.join(root, variant, directory)).filter(file => file.endsWith('.txt'))));
check(`script structure (${scriptFiles.length} files)`, () => {
    for (const file of scriptFiles) {
        try { parse(read(file)); } catch (error) { throw new Error(`${file}: ${error.message}`); }
    }
});
check('no active removed 1.15 script identifiers', () => {
    const removed = /\b(?:add_war_exhaustion|additional_war_exhaustion|has_war_exhaustion|enemy_contested_wargoals|war_exhaustion_from_acceptance_of_dead|country_war_exhaustion_casualties_mult|WAR_EXHAUSTION_KIA_FACTOR|STATE_KAUNAS|STATE_TARTARIA|STATE_GALICH|ideology_social_democrat|on_journal_entry_completed|on_journal_entry_failed)\b/;
    for (const file of scriptFiles) for (const token of tokens(read(file))) {
        assert(!removed.test(token.value), `${file}: ${token.value}`);
    }
});
const groups = index(path.join(game, 'common/journal_entry_groups'));
for (const [name, node] of index(path.join(root, 'src/common/journal_entry_groups'))) groups.set(name, node);
const journals = index(path.join(root, 'src/common/journal_entries'));
check(`journal endings and group illustrations (${journals.size} entries)`, () => {
    for (const [name, node] of journals) {
        assert(field(node, 'activation_description'), `${name}: missing activation description`);
        const group = value(node, 'group');
        if (group) assert(value(groups.get(group), 'illustration'), `${name}: group ${group} needs an illustration`);
        for (const child of node.children) {
            assert(!/^(complete|fail|invalid|on_complete|on_fail|on_invalid|on_timeout|on_.*_all_involved|custom_(?:on_)?(?:completion|failure)_header)$/.test(child.key), `${name}: legacy ${child.key}`);
        }
        const outcomes = node.children.filter(child => child.key === 'outcome');
        assert(outcomes.filter(outcome => flags(outcome).includes('invalid_outcome')).length <= 1, name);
        assert(outcomes.filter(outcome => flags(outcome).includes('timeout')).length <= 1, name);
        if (Number(value(node, 'timeout')) > 0) assert(outcomes.some(outcome => flags(outcome).includes('timeout')), `${name}: missing timeout outcome`);
        for (const outcome of outcomes) {
            assert(value(outcome, 'conclusion_desc'), `${name}: missing conclusion text`);
            if (!flags(outcome).includes('hidden')) {
                assert(value(outcome, 'header') && value(outcome, 'effect_header'), `${name}: missing visible headers`);
            }
            if (!flags(outcome).includes('timeout')) assert(field(outcome, 'trigger'), `${name}: missing trigger`);
            if (flags(outcome).includes('invalid_outcome')) assert(flags(outcome).includes('hidden'), name);
        }
    }
    for (const name of ['je_way_to_greater_germany', 'je_super_germany']) {
        assert(JSON.stringify(journals.get(name)).includes('journal_entry_age'), `${name}: activation timing guard lost`);
    }
});
check('current define and culture references', () => {
    const definitions = new Map();
    for (const directory of [path.join(game, 'common/defines'), path.join(root, 'src/common/defines')]) {
        for (const file of files(directory).filter(file => file.endsWith('.txt'))) {
            for (const node of parse(read(file))) if (node.children) {
                const previous = definitions.get(node.key);
                definitions.set(node.key, { children: [...(previous?.children || []), ...node.children] });
            }
        }
    }
    const cultures = index(path.join(game, 'common/cultures'));
    for (const [name, node] of index(path.join(root, 'src/common/cultures'))) cultures.set(name, node);
    for (const file of scriptFiles) for (const token of tokens(read(file))) {
        for (const match of token.value.matchAll(/define:(\w+)\|(\w+)/g)) {
            assert(field(definitions.get(match[1]), match[2]), `${file}: removed define ${match[0]}`);
        }
        for (const match of token.value.matchAll(/\bcu:([a-z][a-z_]+)/g)) {
            assert(cultures.has(match[1]), `${file}: removed culture ${match[1]}`);
        }
    }
});
check('mobilization group backgrounds exist in base game', () => {
    for (const [name, node] of index(path.join(root, 'src/common/mobilization_option_groups'))) {
        const background = value(node, 'background');
        assert(background && fs.existsSync(path.join(game, background)), `${name}: missing background ${background}`);
    }
});
check('override defines use supported namespaces and keys', () => {
    const supported = new Map();
    for (const file of files(path.join(game, 'common/defines')).filter(file => file.endsWith('.txt'))) {
        for (const namespace of parse(read(file))) {
            const names = supported.get(namespace.key) || new Set();
            for (const setting of namespace.children || []) names.add(setting.key);
            supported.set(namespace.key, names);
        }
    }
    const declarations = new Set();
    for (const file of files(path.join(root, 'src/common/defines')).filter(file => file.endsWith('.txt'))) {
        for (const namespace of parse(read(file))) for (const setting of namespace.children || []) {
            assert(supported.get(namespace.key)?.has(setting.key), `${file}: unsupported ${namespace.key}.${setting.key}`);
            const name = `${namespace.key}.${setting.key}`;
            assert(!declarations.has(name), `${file}: duplicate override ${name}`);
            declarations.add(name);
        }
    }
});
check('shortage interface deactivates without an outcome and excludes decentralized countries', () => {
    const entry = journals.get('kmpmp_je_military_goods_shortage');
    assert.equal(value(entry, 'can_deactivate'), 'yes');
    assert.equal(value(field(entry, 'possible'), 'is_diplomatic_play_committed_participant'), 'yes');
    assert.equal(value(field(entry, 'disable_evaluation'), 'always'), 'yes');
    assert(!entry.children.some(node => ['outcome', 'timeout'].includes(node.key)), 'Temporary shortage interface must not conclude');
    const action = index(path.join(root, 'src/common/on_actions')).get('kmpmp_add_je_military_goods_shortage');
    const involved = field(field(action, 'effect'), 'every_scope_play_involved');
    const limit = field(involved, 'limit');
    assert.equal(value(field(limit, 'NOT'), 'is_country_type'), 'decentralized');
    assert(!JSON.stringify(limit).match(/"(?:is_player|is_ai)"/), 'Shortage mechanics must remain available to regular AI and players');
});
check('protectorate market links are guarded before dereferencing', () => {
    const trigger = index(path.join(root, 'src/common/scripted_triggers')).get('kmpmp_player_protectorate_has_foreign_market');
    const marketBranch = field(trigger, 'trigger_if');
    assert.equal(value(field(marketBranch, 'limit'), 'exists'), 'market');
    const ownerBranch = field(field(marketBranch, 'market'), 'trigger_if');
    assert.equal(value(field(ownerBranch, 'limit'), 'exists'), 'owner');
    assert.equal(field(ownerBranch, 'owner')?.operator, '!=');
    assert.equal(value(ownerBranch, 'owner'), 'ROOT');
    assert.equal(value(field(trigger, 'trigger_else'), 'always'), 'no');
    assert.equal(value(field(field(marketBranch, 'market'), 'trigger_else'), 'always'), 'no');
    const action = index(path.join(root, 'src/common/on_actions')).get('kmpmp_player_protectorate_own_market');
    const limit = field(field(field(action, 'effect'), 'if'), 'limit');
    assert.equal(value(limit, 'kmpmp_player_protectorate_is_own_market_forced'), 'yes');
    assert.equal(value(limit, 'kmpmp_player_protectorate_has_foreign_market'), 'yes');
    assert(!JSON.stringify(limit).includes('market.owner'), 'Unsafe market-owner chain restored');
});
check('scripted bar styles and recognition conditions', () => {
    const bars = index(path.join(root, 'src/common/scripted_progress_bars'));
    for (const [name, node] of bars) {
        assert(['default', 'default_green', 'default_bad'].some(style => value(node, style) === 'yes') || value(node, 'progress_texture'), `${name}: invalid style`);
    }
    const progress = field(bars.get('earn_recognition_progress_bar'), 'monthly_progress');
    const conditions = progress.children.filter(node => node.key === 'progress_condition');
    assert(conditions.length > 0, 'Missing recognition factors');
    assert.equal(new Set(conditions.map(node => JSON.stringify(field(node, 'limit')))).size, conditions.length, 'Duplicate recognition conditions');
    assert(!progress.children.some(node => node.key === 'if'), 'Duplicate legacy progress factors');
});
const stateDir = path.join(root, 'src/map_data/state_regions');
const vanillaStates = index(path.join(game, 'map_data/state_regions'));
const modStates = index(stateDir);
const stateFiles = new Set(files(stateDir).map(file => path.basename(file)));
const effective = new Map(modStates);
for (const file of files(path.join(game, 'map_data/state_regions')).filter(file => file.endsWith('.txt') && !stateFiles.has(path.basename(file)))) {
    for (const node of parse(read(file))) effective.set(key(node), node);
}
check(`state provinces, IDs and copper (${modStates.size} overrides)`, () => {
    const ids = new Set();
    const provinces = new Set();
    for (const [name, node] of effective) {
        const id = value(node, 'id');
        assert(!ids.has(id), `${name}: duplicate ID ${id}`);
        ids.add(id);
        for (const province of field(node, 'provinces')?.children || []) {
            assert(!provinces.has(province.key), `${name}: duplicate province ${province.key}`);
            provinces.add(province.key);
        }
    }
    for (const [name, node] of modStates) {
        const vanilla = vanillaStates.get(name);
        assert(vanilla, `${name}: unknown state`);
        assert.deepEqual(field(node, 'provinces')?.children.map(n => n.key).sort(), field(vanilla, 'provinces')?.children.map(n => n.key).sort(), `${name}: obsolete province assignments`);
        const copper = field(field(vanilla, 'capped_resources'), 'building_copper_mine');
        if (copper) assert.deepEqual(field(field(node, 'capped_resources'), 'building_copper_mine'), copper, `${name}: copper overwritten`);
    }
    for (const name of ['STATE_SARATOV', 'STATE_LITHUANIA', 'STATE_VOLOGDA', 'STATE_TULA', 'STATE_KOSTROMA']) assert(effective.has(name), name);
    // The digest mentions Chukotka, but retail 1.15.0 only has a commented
    // localization key. Never invent a state without matching provinces/history.
    if (vanillaStates.has('STATE_CHUKOTKA')) assert(effective.has('STATE_CHUKOTKA'));
    assert.equal(value(field(modStates.get('STATE_HOKKAIDO'), 'capped_resources'), 'building_lead_mine'), '50');
});
check('supply-ship override inherits required AI fields and updated DNA', () => {
    const ships = index(path.join(root, 'src/common/ship_types'));
    for (const [name] of ships) assert(value(index(path.join(game, 'common/ship_types')).get(name), 'ai_ship_category'), name);
    assert(read(path.join(game, 'common/dna_data/00_abdul_hamid_ii.txt')).includes('gene_asian_east'));
});
check('DEI independence preserves the merged Javan culture', () => {
    const effect = index(path.join(root, 'src/common/scripted_effects')).get('kmpmp_dei_become_indonesia_effect');
    const cultures = field(effect, 'hidden_effect').children.filter(node => node.key === 'add_primary_culture').map(node => node.value);
    assert.deepEqual(cultures, ['cu:javan']);
    assert(field(effect, 'set_country_type'), 'Missing new independence setup');
});
check('GUI braces, localization escaping and conflict markers', () => {
    for (const file of files(path.join(root, 'src')).filter(file => /\.(gui|yml|txt)$/.test(file))) {
        const source = read(file);
        assert(!/^(<<<<<<<|=======|>>>>>>>)/m.test(source), `${file}: merge marker`);
        if (file.endsWith('.gui')) {
            let balance = 0;
            for (const token of tokens(source)) {
                if (token.value === '{') balance++;
                if (token.value === '}') balance--;
                assert(balance >= 0, `${file}: unmatched brace`);
            }
            assert.equal(balance, 0, file);
        }
        if (file.endsWith('.yml')) {
            for (const match of source.matchAll(/\[Concept\([^\]\r\n]*\]/g)) assert(/\)(?:\|[^\]]+)?\]$/.test(match[0]), `${file}: malformed ${match[0]}`);
            for (const match of source.matchAll(/Concept\([^\]\r\n]+\)/g)) assert(!/\$[\w.]+\$/.test(match[0]), `${file}: missing |q in ${match[0]}`);
        }
    }
});
check('prestige-good identities and known legacy overflows', () => {
    const goods = index(path.join(game, 'common/prestige_goods'));
    for (const [name, node] of index(path.join(root, 'src/common/prestige_goods'))) goods.set(name, node);
    const counts = new Map();
    for (const [name, node] of goods) {
        const base = value(node, 'base_good');
        if (!counts.has(base)) counts.set(base, []);
        counts.get(base).push(name);
    }
    // These exact sets already occur in 1.13.11, whose logs contain the same
    // non-fatal assertion. They are documented warnings, not new 1.15 failures.
    // A changed/new overflow set still fails; never silently allow all overflows.
    const legacy = {
        silk: ['prestige_good_suzhou_silk', 'prestige_good_tomioka_silk', 'prestige_good_como_silk', 'prestige_good_generic_kmpmp_premium_silk'],
        engines: ['prestige_good_schichau_engines', 'prestige_good_brunn_type_engines', 'prestige_good_oerlikon_engines', 'prestige_good_generic_kmpmp_premium_engines'],
        wine: ['prestige_good_champagne', 'prestige_good_sherry', 'prestige_good_port_wine', 'prestige_good_generic_kmpmp_premium_wine'],
        porcelain: ['prestige_good_canton_porcelain', 'prestige_good_meissen_porcelain', 'prestige_good_satsuma_ware', 'prestige_good_kmpmp_russia_porcelain'],
    };
    const assignments = {
        company_cfr: 'prestige_good_generic_kmpmp_premium_silk',
        company_basileiades: 'prestige_good_generic_kmpmp_premium_engines',
        company_argentinian_wine: 'prestige_good_generic_kmpmp_premium_wine',
        company_imperial_porcelan_company: 'prestige_good_kmpmp_russia_porcelain',
    };
    const companies = index(path.join(root, 'src/common/company_types'));
    for (const [company, good] of Object.entries(assignments)) {
        assert(field(companies.get(company), 'possible_prestige_goods')?.children.some(node => node.key === good), `${company}: custom prestige-good identity removed/remapped`);
        const base = Object.entries(legacy).find(([, variants]) => variants.includes(good))[0];
        assert.equal(value(goods.get(good), 'base_good'), base, `${good}: changed base good`);
        assert.equal(value(goods.get(good), 'prestige_bonus'), '0.1', `${good}: changed prestige bonus`);
    }
    for (const [base, variants] of counts) if (variants.length > 3) {
        assert(legacy[base], `${base}: new prestige overflow`);
        assert.deepEqual([...variants].sort(), [...legacy[base]].sort(), `${base}: changed legacy overflow set`);
        console.warn(`WARN ${base}: ${variants.length} registered variants; same set as 1.13.11. See https://github.com/MasterSon-git/vic3-kmpmp/pull/647 for findings and pending production/accounting tests.`);
    }
});
console.log(`${checks} compatibility checks passed.${process.exitCode ? ' Resolve the failures above before release.' : ''} Runtime, DLC and multiplayer behavior require game testing.`);
