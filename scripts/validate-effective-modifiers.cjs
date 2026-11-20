// Node.js 18.15+. See docs/DEVELOPMENT.md for snapshot inputs and exit codes.
const path = require('node:path');
const { parseArgs } = require('node:util');
const { build, databases, display, fixed, numericPath, rawFields, readEntries, union, view } = require('./effective-modifiers.cjs');
const { snapshot } = require('./modifier-sources.cjs');

function requirements(intents) {
    if (!intents || typeof intents !== 'object' || Array.isArray(intents)) throw new Error('Expected an object of modifier requirements');
    const byId = new Map();
    for (const [key, intent] of Object.entries(intents)) {
        const db = databases.find(name => key.startsWith(name + '/'));
        const end = db && key.indexOf('/', db.length + 1);
        if (!db || end < 0 || !key.slice(end + 1) || !intent?.reason?.trim() || fixed(intent.effective) === undefined) {
            throw new Error('Invalid effective-value requirement: ' + key);
        }
        const id = key.slice(0, end);
        if (!byId.has(id)) byId.set(id, new Map());
        byId.get(id).set(key.slice(end + 1), intent);
    }
    return byId;
}

// Masked fields are structural differences. Equal subtrees can be skipped
// without evaluating arbitrary trigger or effect logic.
function maskedFields(oldGame, game, full) {
    if (!full?.mod || !game.layers.length) return [];
    if (oldGame.layers.length > 1 || game.layers.length > 1 || oldGame.issues.length || game.issues.length) {
        const script = view => JSON.stringify(view.layers.map(layer => [layer.file, layer.node]));
        if (script(oldGame) === script(game) && String(oldGame.issues) === String(game.issues)) return [];
        return [{ kind: 'masked', path: '', reason: 'inspect layered Vanilla definition under full replacement' }];
    }
    const was = rawFields(oldGame.layers[0]?.node.children || []);
    const current = rawFields(game.layers[0].node.children);
    const replacement = rawFields(full.node.children);
    const result = [];
    for (const [path, value] of current) {
        if (was.get(path) !== value && replacement.get(path) !== value) {
            result.push({ kind: 'masked', path, reason: 'full replacement may mask ' +
                (was.has(path) ? 'modified' : 'added') + ' Vanilla field', baseFile: game.layers[0].file });
        }
    }
    return result;
}

function inspectPath(p, context, oldTarget, target) {
    const { id, old, now, oldGame, game, shadowChanged, types } = context;
    const was = old.at(p), cur = now.at(p);
    const vanillaChanged = oldGame.at(p).vanillaParts !== game.at(p).vanillaParts;
    const modChanged = was.modParts !== cur.modParts || shadowChanged;
    const changed = vanillaChanged || modChanged || was.total !== cur.total;
    const cause = vanillaChanged ? (modChanged ? 'Vanilla+Mod' : 'Vanilla') : (modChanged ? 'Mod' : 'unresolved');
    const converted = old.full?.mod && (!now.full?.mod || old.full.file !== now.full.file) &&
        now.injections.some(layer => layer.file === old.full.file || !old.injections.some(prior => prior.file === layer.file));
    const sameTarget = target && fixed(oldTarget?.effective) === fixed(target.effective);
    const result = { path: p, level: 'REVIEW', existing: !changed, cause: changed ? cause : undefined,
        file: cur.added.at(-1)?.file || now.injections.at(-1)?.file || now.full?.file || old.full?.file,
        baseFile: now.full?.file };
    const fields = [...was.added, ...was.inherited, ...cur.added, ...cur.inherited];
    const removedOpaque = was.total === undefined && !cur.added.length && !cur.inherited.length;
    const unresolvedTarget = target && (!numericPath(id, p, types) || !now.layers.length);
    if (cur.total === undefined || removedOpaque || unresolvedTarget) {
        if (!target && !cur.added.length && fields.every(f => f.kind === 'flag')) return;
        const relevant = cur.added.length || (changed && (was.added.length || fields.some(f => f.modifier)));
        if (!target && !relevant) return;
        const flag = cur.added.length && cur.inherited.length &&
            [...cur.added, ...cur.inherited].every(f => f.kind === 'flag' && f.value === cur.added[0].value);
        const raw = fields => fields.map(f => f.kind === 'opaque' ? f.summary : display(f.value)).join('+') || 'absent';
        return { ...result, kind: flag ? 'flag' : 'unsupported', existing: !changed && (!target || sameTarget),
            reason: flag ? 'redundant inherited Boolean flag' : 'unresolved field; inspect merge',
            rawBase: raw(cur.inherited), rawInjection: raw(cur.added) };
    }
    Object.assign(result, { vanilla: cur.vanilla, modBase: now.full?.mod ? cur.base : undefined,
        injected: cur.delta, effective: cur.total, previous: was.total });
    if (target) {
        const expected = fixed(target.effective);
        return { ...result, kind: 'requirement', level: cur.total === expected ? 'ACCEPTED' : 'ERROR',
            existing: sameTarget && was.total === cur.total, reason: 'expected ' + display(expected) + ' (' + target.reason + ')' };
    }
    const base = cur.vanilla + cur.base;
    if (converted && was.total !== undefined && cur.total !== was.total) {
        // Concurrent upstream balance changes require an intent decision.
        return { ...result, kind: 'conversion', level: vanillaChanged ? 'REVIEW' : 'ERROR',
            requiredDelta: was.total - base, reason: 'full-to-injection conversion changed total' };
    }
    const duplicate = cur.added.find(field => base !== 0n && field.value === base);
    if (duplicate) return { ...result, existing: !changed && !oldTarget, file: duplicate.file,
        kind: 'duplicate', reason: 'injection duplicates inherited contribution' };
    if (was.total !== cur.total) {
        return { ...result, kind: 'change', reason: 'effective contribution changed' };
    }
}

function compare(before, after, oldIntents = {}, newIntents = {}, only) {
    const previous = requirements(oldIntents), proposed = requirements(newIntents);
    const findings = [];
    const uncertain = union(before.loaded.databaseIssues.keys(), after.loaded.databaseIssues.keys(),
        before.vanilla.databaseIssues.keys(), after.vanilla.databaseIssues.keys());
    for (const db of uncertain) {
        const was = union(before.loaded.databaseIssues.get(db) || [], before.vanilla.databaseIssues.get(db) || []);
        const now = union(after.loaded.databaseIssues.get(db) || [], after.vanilla.databaseIssues.get(db) || []);
        for (const issue of union(was, now)) findings.push({ id: db, kind: 'entry', level: 'REVIEW',
            existing: was.has(issue) && now.has(issue), reason: 'database comparison unavailable: ' + issue });
    }
    if (uncertain.has('modifier_type_definitions')) return findings;
    const ids = [...union(before.modIds, after.modIds, previous.keys(), proposed.keys())].filter(id =>
        !id.startsWith('modifier_type_definitions/') && (!only || id.endsWith('/' + only) || id === only));
    if (only && !ids.length) throw new Error('No matching scoped Mod definition or requirement: ' + only);
    for (const id of ids) {
        if (uncertain.has(id.slice(0, id.lastIndexOf('/')))) continue;
        const [old, now, oldGame, game] = [before.loaded, after.loaded, before.vanilla, after.vanilla]
            .map(index => view(index.definitions.get(id), index.types));
        for (const issue of now.issues) {
            findings.push({ id, kind: 'entry', level: 'REVIEW', existing: old.issues.includes(issue), reason: issue });
        }
        for (const [path, files] of now.invalidBooleans) {
            for (const file of files) {
                findings.push({ id, path, file, kind: 'invalid-boolean', level: 'ERROR',
                    existing: old.invalidBooleans.get(path)?.has(file) === true,
                    reason: 'Boolean modifier only accepts yes (found no)' });
            }
        }
        if (now.issues.length) continue;
        for (const row of maskedFields(oldGame, game, now.full)) {
            findings.push({ ...row, id, level: 'REVIEW', existing: false, file: now.full.file });
        }
        const targets = proposed.get(id) || new Map();
        for (const p of previous.get(id)?.keys() || []) {
            if (!targets.has(p)) findings.push({ id, path: p, kind: 'requirement', level: 'REVIEW', existing: false,
                file: 'scripts/modifier-intent.json', reason: 'review removal of effective-value requirement' });
        }
        if (!old.injections.length && !now.injections.length && !targets.size) continue;
        const shadowChanged = [...oldGame.layers, ...game.layers].some(layer =>
            before.modFiles.has(layer.file) !== after.modFiles.has(layer.file));
        const context = { id, old, now, oldGame, game, shadowChanged, types: after.loaded.types };
        for (const p of union(now.paths, old.paths, targets.keys())) {
            if (now.invalidBooleans.has(p) && !targets.has(p)) continue;
            const row = inspectPath(p, context, previous.get(id)?.get(p), targets.get(p));
            if (row) findings.push({ ...row, id });
        }
    }
    return findings;
}

function details(row) {
    const parts = [];
    if (row.effective !== undefined) {
        parts.push('Vanilla=' + display(row.vanilla));
        if (row.modBase !== undefined) parts.push('mod-base=' + display(row.modBase));
        parts.push('injected=' + display(row.injected), 'effective=' + display(row.effective), 'previous=' + display(row.previous));
        if (row.requiredDelta !== undefined) parts.push('delta-to-preserve=' + display(row.requiredDelta));
    } else if (row.rawBase !== undefined) {
        parts.push('base=' + row.rawBase, 'injected=' + row.rawInjection, 'effective=?');
    }
    if (row.cause) parts.push('change=' + row.cause);
    if (row.baseFile) parts.push('base-file=' + row.baseFile);
    return parts.join(' ');
}

const ascii = value => String(value).replace(/[^\x20-\x7e]/g, c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
function print(findings, all) {
    console.log('Scope: shared src/common, supported databases and literal modifier paths (see docs/DEVELOPMENT.md).');
    // Put actionable arithmetic ahead of opaque fields in the bounded preview.
    const priority = ['entry', 'invalid-boolean', 'conversion', 'duplicate', 'flag', 'requirement', 'change', 'masked', 'unsupported'];
    for (const existing of [false, true]) for (const level of ['ERROR', 'REVIEW', 'ACCEPTED']) {
        const rows = findings.filter(row => row.existing === existing && row.level === level)
            .sort((a, b) => priority.indexOf(a.kind) - priority.indexOf(b.kind));
        const kinds = new Map();
        for (const row of rows) kinds.set(row.kind, (kinds.get(row.kind) || 0) + 1);
        const counts = [...kinds].map(([kind, count]) => count + ' ' + kind).join(', ');
        console.log((existing ? 'Existing ' : 'New/changed ') + level + ': ' + rows.length + (counts ? ' (' + counts + ')' : ''));
        for (const row of rows.slice(0, all ? Infinity : 5)) {
            console.log(ascii('  ' + row.id + (row.path ? '/' + row.path : '') + ' [' + (row.file || 'no active file') +
                '] ' + row.reason + ' | ' + details(row)));
        }
        if (!all && rows.length > 5) console.log('  ... use --definition ID or --all');
    }
}

function main() {
    const options = Object.fromEntries(['vanilla', 'vanilla-ref', 'old-vanilla', 'old-vanilla-ref', 'mod-base',
        'mod-head', 'definition'].map(key => [key, { type: 'string' }]));
    options.all = options['legacy-base'] = { type: 'boolean' };
    const { values: args } = parseArgs({ options });
    if (!args.vanilla || !args['mod-base']) throw new Error('Required: --vanilla PATH --mod-base REF (see docs/DEVELOPMENT.md)');
    const repo = path.resolve(__dirname, '..');
    const cache = new Map();
    function load(dir, ref, mod = false) {
        const key = JSON.stringify([path.resolve(dir), ref, mod]);
        if (!cache.has(key)) {
            const { files, intents } = snapshot(dir, ref, databases, mod);
            cache.set(key, { entries: readEntries(files, mod), intents });
        }
        return cache.get(key);
    }
    const game = load(args.vanilla, args['vanilla-ref'] || 'WORKTREE');
    const oldGame = args['old-vanilla'] || args['old-vanilla-ref'] ?
        load(args['old-vanilla'] || args.vanilla, args['old-vanilla-ref'] || 'WORKTREE') : game;
    const oldMod = load(repo, args['mod-base'], true);
    const mod = load(repo, args['mod-head'] || 'WORKTREE', true);
    const findings = compare(build(oldGame.entries, oldMod.entries, args['legacy-base']), build(game.entries, mod.entries),
        oldMod.intents, mod.intents, args.definition);
    print(findings, args.all);
    return findings.some(row => !row.existing && row.level === 'ERROR') ? 1 : 0;
}

if (require.main === module) {
    try { process.exitCode = main(); }
    catch (err) { console.error('INPUT ERROR: ' + ascii(err.message)); process.exitCode = 2; }
}
module.exports = { compare };
