const test = require('node:test');
const assert = require('node:assert/strict');
const { build, display, readEntries } = require('./effective-modifiers.cjs');
const { compare } = require('./validate-effective-modifiers.cjs');

// Fixtures go through the script parser, file overlay, entry resolution and diff.
function snapshot(game, mod) {
    const read = (sources, isMod) => readEntries(new Map(Object.entries(sources)
        .map(([file, text]) => ['common/' + file + '.txt', text])), isMod);
    return build(read(game, false), read(mod, true));
}
function one(db, game, mod) {
    return snapshot({ [db + '/00_game']: game }, { [db + '/zz_patch']: mod });
}
const field = (rows, path) => rows.find(row => row.path === path);
const values = row => [row.vanilla, row.injected, row.effective, row.previous].map(display);

test('#666: duplicate socialist hostility; removing the injected 50 restores the required total', () => {
    const p = 'modifier/hostility';
    const game = 'law = { modifier = { hostility = 50 } }';
    const correct = one('laws', game, 'INJECT:law = { modifier = { tax = 0.25 } }');
    const broken = one('laws', game, 'INJECT:law = { modifier = { tax = 0.25 hostility = 50 } }');
    const intent = { ['laws/law/' + p]: { effective: 50, reason: 'Inherit the hostility contribution' } };
    const suspect = field(compare(correct, broken), p);
    assert.equal(suspect.kind, 'duplicate');
    assert.deepEqual(values(suspect), ['50', '50', '100', '50']);
    assert.equal(field(compare(correct, broken, intent, intent), p).level, 'ERROR');
    const fixed = field(compare(broken, correct, intent, intent), p);
    assert.equal(fixed.level, 'ACCEPTED');
    assert.deepEqual(values(fixed), ['50', '0', '50', '100']);
    assert.equal(field(compare(broken, broken), p).existing, true);
});

test('#688: copying newly inherited law and technology fields, including a Boolean', () => {
    const cases = [
        ['laws', 'law_council_republic', 'country_other_country_socialist_government_hostility_impact_add', '50'],
        ['technology/technologies', 'electric_telegraph', 'country_war_support_casualties_mult', '-0.25'],
        ['technology/technologies', 'war_propaganda', 'country_war_support_battles_increase_mult', '0.25'],
        ['technology/technologies', 'psychiatry', 'country_infamy_generation_mult', '-0.05'],
        ['technology/technologies', 'nationalism', 'country_homeland_infamy_reduction_bool', 'yes'],
    ];
    for (const [db, id, key, value] of cases) {
        const block = id + ' = { modifier = { ' + key + ' = ' + value + ' } }';
        const original = 'INJECT:' + id + ' = { modifier = { local_bonus = 1 } }';
        const old = one(db, id + ' = {}', original);
        const bad = one(db, block, 'INJECT:' + block.replace('modifier = {', 'modifier = { local_bonus = 1'));
        const good = one(db, block, original);
        const row = field(compare(old, bad), 'modifier/' + key);
        assert.equal(row.kind, value === 'yes' ? 'flag' : 'duplicate');
        assert.equal(row.cause, 'Vanilla+Mod');
        if (value === 'yes') assert.equal(row.effective, undefined);
        else assert.equal(Number(display(row.effective)), Number(value) * 2);
        assert.ok(compare(good, good).length === 0);
    }
});

test('#691: reject literal no only for registered Boolean types in active modifier lists', () => {
    const game = {
        'modifier_type_definitions/00_types': 'customs_union = { boolean = yes } numeric_bool = {}',
        'power_bloc_principles/00_game': 'market = { power_bloc_modifier = { customs_union = yes } }',
    };
    const patch = 'power_bloc_principles/zz_patch';
    const state = script => snapshot(game, { [patch]: script });
    const clean = state('');
    const bad = state(`INJECT:market = {
        power_bloc_modifier = { customs_union = no numeric_bool = no unknown_bool = no }
        member_modifier = { customs_union = yes }
        ai_weight = { customs_union = no }
    }`);
    const errors = (before, after) => compare(before, after).filter(row => row.level === 'ERROR');
    const introduced = errors(clean, bad);
    assert.equal(introduced.length, 1);
    const [error] = introduced;
    assert.equal(error.path, 'power_bloc_modifier/customs_union');
    assert.equal(error.file, 'common/' + patch + '.txt');
    assert.match(error.reason, /only accepts yes/);
    assert.equal(error.existing, false);
    assert.equal(errors(bad, bad)[0].existing, true);

    const full = state(`REPLACE:market = {
        member_modifier = { customs_union = no }
        member_modifier = { bonus = 0.5 }
    }`);
    assert.equal(errors(clean, full)[0].path, 'member_modifier/customs_union');
    const fixed = state('INJECT:market = { power_bloc_modifier = { customs_union = no } } REPLACE:market = {}');
    assert.deepEqual(errors(bad, fixed), []);
});

test('#667: convert a full replacement to a delta; preserve the former total', () => {
    const game = { 'static_modifiers/00_game': 'in_default = { building_throughput_add = -0.50 }',
        'modifier_type_definitions/00_types': 'building_throughput_add = {}' };
    const state = (mode, n) => snapshot(game, { 'static_modifiers/zz_mod':
        mode + ':in_default = { building_throughput_add = ' + n + ' }' });
    const old = state('REPLACE', -0.4), bad = state('INJECT', -0.1), good = state('INJECT', 0.1);
    const [row] = compare(old, bad);
    assert.equal(row.kind, 'conversion');
    assert.equal(row.level, 'ERROR');
    assert.deepEqual(values(row), ['-0.5', '-0.1', '-0.6', '-0.4']);
    assert.equal(display(row.requiredDelta), '0.1');
    assert.deepEqual(compare(old, good), []);
});

test('#606: outdated Rayon baseline; keep recipients, scaling and changed upstream intent distinct', () => {
    const pm = (mode, wood) => mode + 'pm_rayon = { building_modifiers = { workforce_scaled = { wood = ' + wood +
        ' } level_scaled = { wood = 2 } } state_modifiers = { workforce_scaled = { wood = 7 } } }';
    const old = one('production_methods', pm('', 40), pm('REPLACE:', 20));
    const bad = one('production_methods', pm('', 10),
        'INJECT:pm_rayon = { building_modifiers = { workforce_scaled = { wood = -20 } } }');
    const [row] = compare(old, bad);
    assert.equal(row.kind, 'conversion');
    assert.equal(row.level, 'REVIEW');
    assert.equal(row.path, 'building_modifiers/workforce_scaled/wood');
    assert.deepEqual(values(row), ['10', '-20', '-10', '20']);
    const approved = { ['production_methods/pm_rayon/' + row.path]: { effective: 10, reason: 'Inherit the reduced input' } };
    assert.equal(compare(old, bad, {}, approved)[0].level, 'ERROR');
    const good = one('production_methods', pm('', 10), '');
    assert.equal(compare(old, good, {}, approved)[0].level, 'ACCEPTED');
});

test('#606: distinguish a wrong Bloc delta from a retained inherited discount', () => {
    const game = 'exploit = { power_bloc_modifier = { cohesion = -20 } } foreign = { member_modifier = { cost = -0.5 } }';
    const state = mod => one('power_bloc_principles', game, mod);
    const old = state('REPLACE:exploit = { power_bloc_modifier = { cohesion = -10 } } REPLACE:foreign = { member_modifier = { cost = -0.5 } }');
    const bad = state('INJECT:exploit = { power_bloc_modifier = { cohesion = -10 } } INJECT:foreign = { member_modifier = { cost = -0.5 } }');
    const good = state('INJECT:exploit = { power_bloc_modifier = { cohesion = 10 } } INJECT:foreign = {}');
    const rows = compare(old, bad);
    assert.deepEqual(rows.map(row => [row.level, display(row.effective), display(row.requiredDelta)]),
        [['ERROR', '-30', '10'], ['ERROR', '-1', '0']]);
    assert.deepEqual(compare(old, good), []);
});

test('approved additive supply-ship capacity; detect subsequent drift and distinguish existing errors', () => {
    const ship = bonus => one('ship_types', 'supply = { modifier = { capacity = 500 } }',
        'INJECT:supply = { modifier = { capacity = ' + bonus + ' } }');
    const intent = { 'ship_types/supply/modifier/capacity': { effective: 1000, reason: 'Double supply capacity' } };
    const correct = ship(500), wrong = ship(400);
    const [ok] = compare(correct, correct, intent, intent);
    assert.equal(ok.level, 'ACCEPTED');
    assert.deepEqual(values(ok), ['500', '500', '1000', '1000']);
    const [regression] = compare(correct, wrong, intent, intent);
    assert.equal(regression.level, 'ERROR');
    assert.equal(regression.existing, false);
    assert.equal(compare(wrong, wrong, intent, intent)[0].existing, true);
});

test('unchanged injection with a Vanilla-only change, including a newly inherited key', () => {
    const mod = 'TRY_INJECT:option = { unit_modifier = { strength = 2 extra = 3 } upkeep_modifier = { strength = 5 } }';
    const state = body => one('mobilization_options', 'option = { unit_modifier = { ' + body + ' } }', mod);
    const rows = compare(state('strength = 4'), state('strength = 8 extra = 3'));
    assert.deepEqual(values(field(rows, 'unit_modifier/strength')), ['8', '2', '10', '6']);
    assert.equal(field(rows, 'unit_modifier/extra').kind, 'duplicate');
    assert.ok(rows.every(row => row.cause === 'Vanilla'));
    assert.equal(rows.length, 2);
});

test('all six modes obey their missing-target behavior; replacement resets earlier injections', () => {
    const state = (mode, game = '') => one('laws', game, mode + ':law = { modifier = { x = 2 } }');
    const empty = one('laws', '', '');
    for (const mode of ['TRY_INJECT', 'TRY_REPLACE']) assert.deepEqual(compare(empty, state(mode)), []);
    for (const mode of ['INJECT', 'REPLACE']) assert.equal(compare(empty, state(mode))[0].kind, 'entry');
    const target = { 'laws/law/modifier/x': { effective: 2, reason: 'Created entry' } };
    for (const mode of ['INJECT_OR_CREATE', 'REPLACE_OR_CREATE']) {
        assert.equal(compare(empty, state(mode), {}, target)[0].level, 'ACCEPTED');
    }
    const game = { 'laws/00_game': 'law = { modifier = { x = 10 } }' };
    for (const mode of ['REPLACE', 'TRY_REPLACE', 'REPLACE_OR_CREATE']) {
        const after = snapshot(game, { 'laws/aa_first': 'TRY_INJECT:law = { modifier = { x = 8 } }',
            'laws/bb_last': mode + ':law = { modifier = { x = 2 } }' });
        assert.equal(compare(empty, after, {}, target).find(row => row.kind === 'requirement').level, 'ACCEPTED');
    }
});

test('same-file shadow and bundled upstream bases, including a KMPMP-only path', () => {
    const game = { 'power_bloc_principles/00_base': 'bloc = { leader_modifier = { x = 90 } }' };
    const bundled = { 'power_bloc_principles/00_base': 'bloc = { member_modifier = { x = 4 } }' };
    const patched = { ...bundled, 'power_bloc_principles/zz_patch':
        'INJECT:bloc = { member_modifier = { x = 4 } leader_modifier = { x = 4 } institution_modifier = { x = 4 } }' };
    const rows = compare(snapshot(game, bundled), snapshot(game, patched));
    const duplicate = field(rows, 'member_modifier/x');
    assert.deepEqual(values(duplicate), ['0', '4', '8', '4']);
    assert.equal(display(duplicate.modBase), '4');
    assert.equal(duplicate.baseFile, 'common/power_bloc_principles/00_base.txt');
    assert.ok(rows.filter(row => row.kind === 'duplicate').length === 1);
    assert.equal(display(field(rows, 'institution_modifier/x').effective), '4');
});

test('identify a copied contribution among several injections and respect definition identity', () => {
    const game = { 'laws/00_game': 'law = { modifier = { x = 50 } } other = { modifier = { y = 50 } }' };
    const original = { 'laws/aa_patch': 'INJECT:law = { modifier = { x = 2 } }' };
    const after = { ...original, 'laws/zz_patch': 'TRY_INJECT:law = { modifier = { x = 50 y = 50 } }' };
    const rows = compare(snapshot(game, original), snapshot(game, after));
    assert.equal(field(rows, 'modifier/x').kind, 'duplicate');
    assert.deepEqual(values(field(rows, 'modifier/x')), ['50', '52', '102', '52']);
    assert.equal(field(rows, 'modifier/x').file, 'common/laws/zz_patch.txt');
    assert.deepEqual(values(field(rows, 'modifier/y')), ['0', '50', '50', '0']);
});

test('review masked nested fields, opaque effects, repeated containers and nonliteral values', () => {
    const mod = 'REPLACE:law = { modifier = { tax = 1 } }';
    const old = one('laws', 'law = { modifier = { tax = 1 } }', mod);
    const newer = one('laws', 'law = { modifier = { tax = 2 } effect = { add = x add = y } }', mod);
    const masked = compare(old, newer);
    assert.deepEqual(masked.map(row => row.path).sort(), ['effect/add', 'modifier/tax']);
    assert.ok(masked.every(row => row.kind === 'masked'));
    const ambiguous = one('laws', 'law = { modifier = { tax = 3 } modifier = { tax = 7 } }',
        'INJECT:law = { modifier = { tax = 2 } weight = { value = 8 } ordinary = 3 }');
    const opaque = compare(old, ambiguous);
    for (const p of ['modifier/tax', 'weight', 'ordinary']) {
        assert.equal(field(opaque, p).kind, 'unsupported');
        assert.equal(field(opaque, p).effective, undefined);
    }
    const expression = one('laws', 'law = { modifier = { tax = @rate } }', 'INJECT:law = { modifier = { tax = 2 } }');
    assert.equal(field(compare(old, expression), 'modifier/tax').kind, 'unsupported');
    const conditional = one('laws', 'law = { modifier = { tax = 3 if = { tax = 1 } } }',
        'INJECT:law = { modifier = { tax = 2 } }');
    assert.equal(field(compare(old, conditional), 'modifier/tax').effective, undefined);
});

test('unexpanded includes prevent claiming a total for the affected definition or database', () => {
    const patch = 'INJECT:law = { modifier = { tax = 2 } }';
    const old = one('laws', 'law = { modifier = { tax = 2 } }', patch);
    for (const game of ['law = { inline_script = law_base }', 'inline_script = law_database']) {
        const [row] = compare(old, one('laws', game, patch));
        assert.equal(row.level, 'REVIEW');
        assert.equal(row.kind, 'entry');
        assert.equal(row.effective, undefined);
    }
});
