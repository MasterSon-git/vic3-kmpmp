# Prestige goods: historical limit investigation

Date: 2026-11-05. Compatibility scope: [#645](https://github.com/MasterSon-git/vic3-kmpmp/issues/645). Optional follow-up: [#646](https://github.com/MasterSon-git/vic3-kmpmp/issues/646).

## Decision and finding

**Keep all four custom prestige-good identities unchanged. No new 1.15 regression was demonstrated.** Historical logs and the 1.13.11 data establish that the limit diagnostic predates this update. Compatibility policy prioritizes the existing identities and mechanics; remapping goods solely to eliminate this warning is outside #645.

This finding establishes the history of the warning and unchanged relevant scripts/data. It does not establish that every part of fourth-variant production, accounting or save/load works correctly. Those runtime mechanics remain unverified.

## Evidence

### The assertion predates 1.15

Read-only inspection of the normal user log archive found the same message:

```text
Assertion failed: Exceeding maximum amount of Prestige Goods per Goods for silk (3)
```

| Engine version | Local evidence | Observation |
|---|---|---|
| 1.13.11 | `logs/error.2.log:2`, paired with `logs/code_revisions.2.log` | The assertion was logged on 2026-08-19. Revision `15aa89ae429b6bcff8d195f2a650f98ba95cd64c`. |
| 1.13.11 | `logs/error.log:2`, paired with `logs/code_revisions.log` | The same assertion was logged on 2026-10-13. |
| 1.13.10 | `logs/error.3.log:2`, paired with `logs/code_revisions.3.log` | The same assertion was logged on 2026-08-18. |
| 1.15.0 | Isolated `runtime-mod-verified/logs/error.log` under the task's temporary directory | The same text is logged, and database/event/localization loading continues. |

The historical paths above are relative to `C:/Users/local/Documents/Paradox Interactive/Victoria 3`. Log rotation can replace these files later. The investigation did not write to them.

In the available old and new logs this diagnostic does not stop subsequent event loading. Continued startup does not, by itself, prove production correctness.

### All affected variant sets already existed

Compared the committed vanilla 1.13.11 baseline (`fd55bd313005874c4a543d87129348a9c94acb01`) with the installed 1.15.0 definitions. The relevant vanilla definitions are unchanged apart from insignificant formatting; each base good already had three vanilla variants. KMPMP's prestige-good definition file has no implementation diff against its original mod HEAD.

| Base good | Vanilla variants in both versions | Existing custom variant | Producing company |
|---|---|---|---|
| Silk | Suzhou, Tomioka, Como | `prestige_good_generic_kmpmp_premium_silk` | `company_cfr` |
| Engines | Schichau, Brünn Type, Oerlikon | `prestige_good_generic_kmpmp_premium_engines` | `company_basileiades` |
| Wine | Champagne, Sherry, Port Wine | `prestige_good_generic_kmpmp_premium_wine` | `company_argentinian_wine` |
| Porcelain | Canton, Meissen, Satsuma Ware | `prestige_good_kmpmp_russia_porcelain` | `company_imperial_porcelan_company` |

1.15 adds other prestige goods for aeroplanes, tools, groceries and luxury clothes. These additions do not create the four overflows above. The prestige-good type documentation supplies no new limit/overflow semantics, and no configurable limit was found in the inspected defines.

### Script paths still target the custom goods

Static comparisons verified:

- Each company's `possible_prestige_goods` assignment retains its exact custom good key. No company is redirected to a vanilla brand.
- All four custom goods retain their original base good, texture and `prestige_bonus = 0.1`.
- The engines, silk and wine JEs retain their original completion conditions, unlock effects and monthly pulses after migration into the required 1.15 outcome syntax.
- Each of those JEs selects a company eligible for the corresponding custom good; accumulates progress while the company is prosperous and national production ranks in the top three; and sets the matching company unlock variable on completion. Current vanilla's target is 36 monthly increments.
- Each producing company's `prestige_goods_trigger` tests that same unlock variable. The script does not convert the custom key into a positional variant number or select a different brand.
- `rebind_prestige_good_company`, the vanilla helper used by these JEs, is unchanged between the baseline and 1.15.
- Russia Porcelain follows the custom company's ordinary prestige-production path; it has no separate custom prestige-unlock JE in this file.

These checks find no script-level brand mismatch or limit-induced JE failure. They cannot determine how the closed engine handles quantities/indices beyond its asserted limit. In particular, a JE's unlock variable being set would not prove that the resulting good's production/accounting is correct.

### Existing saves do not demonstrate fourth-variant production

Inspected the local 1.13.9 Prussia autosave (1838) and a 1.13.8 Cuba save (1884) without changing or loading them into 1.15. The later save contains 106 active company records, none of the four companies above, and no matching premium-good unlock variables. It therefore cannot verify or refute production by those companies. No completed custom unlock was found in the inspected saves.

An old save's `previous_price_report.goods` records serialize `prestige_goods` arrays with three entries. That establishes an old three-slot price-report representation. It does not show which variant would map to which slot, whether a fourth slot is clamped/discarded elsewhere, or whether prices and production share the same internal representation. Treat it as a reason to test accounting, not proof of a particular corruption or truncation bug.

An old 1.13.11 executable is not present in the tracked vanilla repository; only data files and old logs were available. No controlled old/new production or save/load comparison was performed. Headless startup in the earlier compatibility work did not start a campaign, and Steam/store-backend initialization was unavailable. No gameplay failure caused by overflow has been confirmed in either version.

## Validator behavior

The read-only validator now checks that all four company assignments, base goods and +10% bonuses remain intact. It prints a warning for the exact four overflow sets documented in 1.13.11. New overflow goods or changed overflow sets still fail validation. In-memory negative checks confirmed that adding a fifth silk variant or redirecting CFR to Como silk causes validation to fail, while the existing four sets pass with warnings. No game/mod data was changed for those negative checks. This distinguishes the accepted legacy diagnostic from new compatibility regressions; it does not certify the engine behavior of fourth variants.

## Follow-up investigation for #646

Do not consolidate brands before observing a functional failure or deliberately approving a redesign. Use disposable campaign copies to run these tests in 1.13.11 and 1.15, with the same DLC configuration:

1. Form each affected company and satisfy its unlock conditions. For the three custom JEs, test normal 36-month progress, completion, company-variable assignment and actual subsequent production. Also force an unlock in a diagnostic scenario to separate JE behavior from engine production behavior.
2. Inspect the company's exact produced prestige-good key, the building's prestige output, state/market/world sales and demand, price reports, prestige awards, throughput/input effects and consumption. Compare against an otherwise identical good within three variants.
3. Repeat with each vanilla variant available/unavailable through DLC and with all relevant companies producing. Separate the registration count from the number of variants actually produced; do not assume they have the same effect.
4. Save/reload after production begins; verify identity, quantities and prices survive. Run the same save state in multiplayer, including hotjoin/desync checks.
5. Record any missing/wrong good, ignored output or incorrect accounting as a specific longstanding or newly introduced defect, with reproduction steps and affected versions.

A separate source-level lifecycle question also deserves testing: vanilla's `re_add_disbanded_company_prestige_good_jes` enumerates vanilla generic JEs, and KMPMP has no custom calls registering these three JEs in that recovery path. Their unlock variables live on companies. Test completing a JE, disbanding its company, and re-forming it to determine whether the custom unlock can be earned again. This may be a pre-existing recovery gap independent of the variant count; it is not a confirmed runtime failure or a reason to change #645's brand identities.

If tests establish an engine limitation with real consequences, options for #646 include an explicitly approved consolidation of native variants, or a company-brand representation using shared native goods plus separate display/modifier logic. Both change market identity or mechanics and require a design review. Neither option has been implemented. A genuinely 1.15-only regression should instead be described and reviewed for the smallest necessary #645 fix.
