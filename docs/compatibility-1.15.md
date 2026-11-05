# Victoria 3 1.15 compatibility implementation

Date: 2026-11-05. Specification: [Issue #645](https://github.com/MasterSon-git/vic3-kmpmp/issues/645).

**Status: compatibility implementation prepared for draft review; release validation remains outstanding.** All four custom prestige-good identities are preserved. Historical investigation established that their limit diagnostic predates 1.15; no new regression was demonstrated. Interactive campaign, DLC entitlement and multiplayer tests remain outstanding. Review work uses the existing feature branch; merging and closing #645 are outside this change.

## References and repository state

- Mod working tree was clean before implementation. These changes do not include unrelated pre-existing edits.
- Vanilla Git root: `C:/Users/local/source/vic3`; baseline `fd55bd313005874c4a543d87129348a9c94acb01`, commit message `update to 1.13.11`.
- `src/game` is a directory junction to the Steam installation. Git tracks its individual files as regular `100644` entries. `git diff HEAD` therefore exposes their changed contents, rather than just the junction target.
- Installed launcher metadata reports `1.15.0 (Ivan-Chai)`. The executable reports `release/1.15.0`, revision `6338547985dbc271523e149f362a6fd93dc62975`, built 2026-11-03.
- Analysis included tracked differences against HEAD, untracked vanilla files, definitions that KMPMP injects/replaces, and same-path file overrides. Historical comparison files were extracted to a temporary directory outside vanilla.
- Consulted the [1.15 digest](https://github.com/Victoria-3-Modding-Co-op/Modding-Digests/tree/main/1.15.0), including breaking changes, features, script documentation, data types, file changes, and relevant generated type references. Actual installed vanilla scripts took precedence when these disagreed.

## Implemented changes

### Journal Entries

- Migrated legacy completion, failure, invalidation and timeout paths to `outcome` blocks. Preserved effects, triggered events, contextless per-country effects, and Peru-Bolivia's custom headers.
- Compared all 21 vanilla JE overrides with current definitions. Carried forward conclusion descriptions, activation descriptions and new cleanup hooks; retained KMPMP's custom requirements/rewards.
- Added the activation-description triggers required by the actual engine for custom entries. The CPC injection inherits this trigger from its base entry instead of declaring it twice.
- Retained the Greater Germany activation-age workaround. Removed no custom JE event references.
- Verified the illustrations of all referenced JE groups. KMPMP does not need an additional group override.
- There are 65 JE definitions, including a CPC injection, for 64 effective entry types.

### War Support

- Replaced the obsolete exhaustion calculation with `zz_kmpmp_war_support_values.txt`, based on vanilla 1.15's signed `war_support_change`. Retained all new vanilla factors, war-goal progression, enemy-pressure checks, signed event contributions, and journal-specific contributions.
- Preserved KMPMP's incorporated-state occupation tiers: loss of 0, 0.1, 0.5, 1, 2, 3 or 10 support per beat. Guarded the calculation for countries with no incorporated states.
- Preserved Power Bloc bonuses of 0.5/0.75/1 and the technology bonus of 0.2 as positive signed contributions. Migrated the custom casualty-resistance modifier to `country_war_support_casualties_mult`, retaining -0.2.
- Set `WAR_SUPPORT_CHANGE_KIA_FACTOR` to -0.825: new vanilla -2.0 multiplied by the previous KMPMP/vanilla ratio, 1.65/4.0. This preserves the relative casualty reduction, rather than treating the old positive exhaustion coefficient as a signed support coefficient.
- Converted the custom peace threshold -80 to 10 and subject-demobilization progress thresholds to the equivalent positions on the new 0–100 scale. The subject-demobilization system remains disabled by its existing on-action configuration; this update does not enable it.
- Moved the existing prohibition on farming recognition through war goals into the new extracted scripted-effect hooks. Vanilla's current war-goal on-actions now run once, including timer enforcement, narrative events and new diplomatic bookkeeping.

### Map and State Regions

- Merged all 13 overridden region files against the old baseline and current installation: 573 state definitions.
- Preserved all 205 intentional arable-land/capped-resource edits identified against 1.13.11, including Hokkaido's 50 lead capacity.
- Incorporated current province assignments, locators, copper deposits, cold-effect fields and other unchanged vanilla properties.
- Updated `STATE_TARTARIA` → `STATE_SARATOV`, `STATE_KAUNAS` → `STATE_LITHUANIA`, and `STATE_GALICH` → `STATE_VOLOGDA`, including JE references. Added current Tula and Kostroma definitions.
- The digest mentions `STATE_CHUKOTKA`, but the installed retail game has no such definition or history: only a commented English localization key. No state/province history was invented. Validation requires it if a future installation actually defines it.

### Military

- Added base-game background assets to every custom/replaced mobilization group while preserving weights and the compact mobilization interface.
- Retained the supply ship's 500 capacity injection; the full vanilla type supplies its required AI category and other fields. An additional replacement would unnecessarily obscure the new vanilla type.
- Rebased affected commander/technology/Power Bloc definitions on current modifiers while retaining custom numerical edits. Converted optional, already-disabled GGGG tea/coffee injections to `TRY_INJECT` to avoid missing-target errors.

### Economy and integrated features

- Carried copper inputs through overridden industrial, fishing, urban and construction production methods while preserving custom outputs and unrelated modifiers.
- Preserved custom company eligibility instead of adding stricter vanilla building requirements alongside it. Carried relevant copper membership into replacements; injections inherit new vanilla list members without appending them twice.
- Retained legacy custom infamy coefficients 5, 2 and population cap 50 as local script values after their defines were removed. The existing custom diplomatic action remains disabled as before.
- Updated decree-variant queries and current diplomacy, treaty, interest-group and ideology structures where KMPMP replaces them. Preserved custom treaty infamy calculations.
- Preserved zero relation change for the global-market trade restriction by replacing the verified current article without its incompatible relations floor.
- Migrated the renamed North Caucasian culture to Dagestani and included its new Caucasian successors in the existing Georgian merge; Circassian remains deliberately excluded. Updated relevant Caucasus events and the social-democrat ideology reference to current vanilla's state-socialist identifier.
- Carried forward changed event cleanup and temporary-immortality handling. A custom copy of the new Indonesia independence effect retains KMPMP's single merged Javan primary culture.
- ASE/FAE/CPC features remain present. No optional gameplay system was enabled by this update.

### GUI

- Rebased the changed types in ASE goods panels, Power Bloc formation, diplomacy and war interfaces, plus same-path budget/popups/context-menu overrides.
- Retained custom peace restrictions and ASE controls. Included the current war start-date header, stalemate countdown and ship tooltips.
- Merged independent tooltip additions. Kept compact mobilization sizes, wrapping and collapse controls where vanilla's changes were cosmetic.
- Updated affected graphics references and environment parameters while retaining reduced tree/particle settings and the lower SSAO sample count.

### Localization and characters

- Escaped nested localization references with `|q`, including multiple references in one `Concept(...)` string and the numeric civil-war progress string. Fixed the malformed war-support modifier descriptions.
- Added missing English/German subject-demobilization labels and the Alsace-Lorraine recovery goal.
- Updated changed character-template culture/religion fields. The referenced Abdul Hamid DNA is inherited from current vanilla and contains `gene_asian_east`; KMPMP has no custom DNA block to amend.
- All three metadata variants target `1.15.0`. `src_test` contains only placeholder files, so it adds no separate gameplay implementation requiring migration.

## Compatibility limitations and decisions

### Prestige capacity — known legacy diagnostic; identities preserved

The engine logs an assertion concerning three prestige variants. The 1.13.11 and 1.15 data contain the same four affected sets:

| Base good | Existing vanilla variants | Fourth KMPMP variant |
|---|---|---|
| Silk | Suzhou, Tomioka, Como | Premium Silk |
| Engines | Schichau, Brünn Type, Oerlikon | Premium Engines |
| Wine | Champagne, Sherry, Port Wine | Premium Wine |
| Porcelain | Canton, Meissen, Satsuma Ware | Russia Porcelain |

The same assertion appears in archived 1.13.11 and 1.13.10 engine logs. The affected vanilla definitions are unchanged between the baseline and 1.15, and the custom definitions, company assignments and JE unlock logic remain intact. This is documented as a pre-existing diagnostic; no new 1.15 regression was demonstrated.

Following the maintainer's instruction, no affected feature is removed, merged or remapped for #645 solely to eliminate that diagnostic. The validator treats the exact historical sets as warnings while rejecting new/changed overflow sets and protecting the custom identities, base goods and bonuses. This does not certify fourth-variant production/accounting: no wrong-good production or JE failure attributable to the limit has been confirmed, and the available saves do not exercise the affected companies. The possible impact of the old three-slot price-report representation needs a controlled runtime test.

See [the detailed investigation and #646 test/proposal notes](prestige-goods-investigation-1.15.md). Optional consolidation remains modernization work, contingent on evidence or an approved design change.

### War-system differences

The old globally clamped, always-declining exhaustion model, including its fervor/lobby reduction caps, does not have an exact equivalent in the new signed-support system. This implementation preserves the meaningful custom occupation/casualty/bonus terms and adopts vanilla's new duration, battle, economic and war-goal rules. It does not impose the removed exhaustion floor/clamp on the new model. Positive support growth and different capitulation timing are consequently possible. The engine's enemy-pressure calculation still uses its native inputs; changing KMPMP's occupation contribution does not replace that engine calculation.

Follow-up: review resulting war length and bonus strength in actual wars. Deliberate retuning of these numbers belongs in the modernization issue, not this compatibility patch.

## Validation

Run read-only static checks with Node.js:

```powershell
node scripts/validate-1.15.cjs "C:/Program Files (x86)/Steam/SteamApps/common/Victoria 3/game"
git diff --check
```

Verified statically:

- Script structure across 493 source/variant files; JE outcomes, required group art and activation descriptions; current culture/define references; mobilization assets; progress styles/conditions; province and ID uniqueness; all 573 overridden province sets; copper preservation; ship inheritance/DNA; Javan independence; GUI braces; localization quote escaping; and conflict-marker absence.
- Separate baseline comparisons confirmed all 205 intentional land/resource edits and custom JE event/timing references were preserved.
- All twelve check groups pass, with four explicit legacy prestige-limit warnings. The last group checks the exact historical variant sets and preserves company assignments/base goods/bonuses; it fails on new/changed overflow sets. Static success does not verify actual production beyond the engine diagnostic limit.

Engine checks:

- Launched the installed 1.15 executable headlessly with `-nographics -nosounds -debug_mode` and isolated temporary `-userdir` profiles; loaded a temporary copy of the mod.
- Captured an unmodded startup baseline and repeated mod startup after fixes, comparing additional error messages against that baseline.
- Used actual engine diagnostics to fix missing activation descriptions, invalid cultures/defines, duplicate copper membership, trigger injection duplication, localization escaping, and encoding issues.
- Headless startup reaches database/event/localization loading. This is **not** a fresh 1836 campaign, a rendered UI test, or a test of JE/war effects during simulation.
- The temporary profile requested DLCs disabled, but Steam initialization/store-backend access failed. Actual ownership/feature activation, and especially a State & Revolution-enabled campaign, could not be verified. Script/type presence alone does not establish DLC runtime compatibility.
- No multiplayer or desync test was performed.

Remaining diagnostic categories beyond the unmodded headless baseline:

- The pre-existing prestige-limit assertion described above (the engine names silk; historical/static enumeration identifies four affected goods). This is not treated as a demonstrated 1.15 regression.
- Duplicate event-ID messages from the existing intentional event-override scheme. They identify the mod's event as the new definition; the overrides were retained rather than removed to silence diagnostics.
- Existing unused `countries_je_the_sugar_monopoly` and orphaned `sick_man.2` warnings. No unrelated cleanup/removal was made.
- Headless rendering/particle and unavailable store-backend diagnostics also occur without the mod and are not evidence of a mod regression.

## Remaining work

1. Run fresh 1836 campaigns with no optional DLC, and with State & Revolution plus supported DLCs actually enabled.
2. Exercise representative custom and overridden JE success/failure/invalidation/timeout paths, including Greater Germany, Russia, Peru-Bolivia and Carlist Spain.
3. Test real wars: occupation tiers, casualty modifiers, Power Bloc/technology bonuses, war-goal enforcement, peace controls and capitulation.
4. Inspect rendered GUI, province ownership/deposits, copper production chains, custom buildings/companies, FAE/ASE/CPC, state alignments, interactions and diplomatic actions during play.
5. Perform a multiplayer/hotjoin/desync smoke test and inspect resulting logs.
6. Investigate fourth-variant production/accounting and company-disband recovery using the focused tests documented for #646. Reclassify only a demonstrated new 1.15 regression as #645 work; do not consolidate brands merely to silence old warnings.

Intentional balance redesign, enabling the previously disabled subject-demobilization/annexation systems, and adopting additional 1.15 features remain modernization work.

## Changed files and Git precautions

See [the changed-file inventory](compatibility-1.15-files.txt), relative to pre-migration mod commit `df1521a6a945f4821758936be7889f41e8d06568`. It includes the migrated exhaustion-file deletion and new support/effect/validation/localization files. Only implementation sources, validation and documentation are included; local archives, runtime copies and logs are excluded. Publication details are recorded in the draft PR.

The vanilla repository and Steam files were used read-only. Final before/after verification confirmed that its HEAD, full tracked binary diff hash, complete status including untracked names, and index hash are all unchanged. The tracked-diff SHA-256 is `db8dbfdfce97585c568b3a52f22f66379fb09dbebef081d8f874889ebefdd453`. Temporary historical extracts, runtime copies, profiles, logs and comparison evidence are outside the vanilla repository, under `C:/Users/local/AppData/Local/Temp/kmpmp-115`. Normal user logs/settings were not used as test output.
