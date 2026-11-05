# Testing KMPMP

Choose checks based on the change. The baseline has no automated campaign or
multiplayer harness. Documentation and packaging checks do not establish game
compatibility. Report skipped checks and keep incomplete work in a Draft PR.

## Record the environment

Record the Victoria 3 version **and checksum**, KMPMP commit or Workshop update,
production/test/single-player variant, enabled DLC, playset and load order, game
rules, starting country/date, and OS. Metadata's `supported_game_version` is a
declaration, not evidence that a test was run. Do not assume a feature's DLC
requirements from an upstream description: the integrated version can differ.
Test relevant DLC enabled/disabled combinations when available; state which were
unavailable.

Use a separate playset and disposable campaign. Deploy as described in
[DEVELOPMENT.md](DEVELOPMENT.md), verify the installed folder and disable other
copies of KMPMP and standalone bundled mods. Copy valued saves before testing.

## Basic checks and smoke test

1. Review the diff and run `git diff --check`. Check braces, scopes, identifiers,
   localization headers/BOM/escaping, references and load-order effects for the
   files changed. Run relevant validators that exist on your branch; do not
   assume tools from an unmerged PR are on `main`.
2. For packaging changes, deploy all three variants to temporary destinations.
   Check metadata, thumbnails, test overlay exclusions, single-player selections
   and `LICENSE.md`, `THIRD_PARTY_NOTICES.md`, `LICENSES/`. Compare copied notices
   byte-for-byte with their repository originals.
3. Launch the intended build and inspect the main menu, localization and checksum.
   Start a fresh 1836 campaign, unpause through affected daily/weekly/monthly
   pulses, and open the UI touched by the change.
4. Exercise the affected feature, then save, exit and reload. Check logs after
   each stage. Menu loads or headless startup alone do not establish correct
   event chains, simulation, rendered controls or multiplayer.

## Gameplay regressions

Compare baseline and changed builds using matching game versions, DLC, rules and
starting conditions. Choose representative checks for the affected system:

- Military: forts, engineers, mobilization/shortages, battles, supply, occupation,
  peace/war-goal outcomes and related modifiers.
- Economy: ASE controls/quantities, buying/selling, private construction, railways,
  canals, production inputs/outputs and affected company or prestige goods.
- Diplomacy/country content: transfers, subject tools, formations and Journal Entry
  activation, progress, success/failure/invalidation/timeout paths.
- UI/assets: controls, tooltips and icons in English/German, map themes,
  state/province assignments and relevant DLC interfaces.

Record expected values and observed results, including important triggers,
rewards and timings. Preserve intentional balance; differences from vanilla are
not automatically bugs. Separate existing warnings from new ones. Old saves help
reproduction but cannot replace fresh-start checks for history/initialization.

## Multiplayer

Use at least two players/clients with the same game build/checksum, KMPMP
revision, DLC availability as configured by the host, playset order and rules.
Record host/client setup. Start or load together, simulate across relevant pulse
boundaries, exercise the changed feature from both sides, save/rehost and test
hotjoin when relevant. Check for differing state, desyncs, disconnects and UI
errors. A short successful session is limited evidence for a full campaign.

For a desync, preserve host and affected client saves/logs and available
out-of-sync reports immediately, with the in-game date and preceding actions.
Note whether it reproduces after rehosting/hotjoining. Share the smallest setup.

## Logs, saves and bug reports

The usual user-data root is
`%USERPROFILE%\Documents\Paradox Interactive\Victoria 3\` (or redirected
Documents/your explicit test user directory). Inspect `logs/error.log` and
`logs/game.log`; include `logs/system.log` for environment/startup failures when
present. Crash and out-of-sync output locations can vary by build: retain the
directories produced by that run and state their paths. Select any isolated
user directory using supported launch options for your target build.

Logs may be replaced on the next launch. Copy them immediately, label baseline
and changed-build files, and keep relevant context/timestamps. Investigate new
script, missing-key and scope errors. Compare renderer/platform messages with
an unmodded or prior-build baseline before attributing them to the change.

Attach a save from `save games/` immediately before the issue. State whether it
began on an older game/mod version, identify country/date, list exact actions
and simulation time, and distinguish expected from actual results. Add screenshots
for visual problems and relevant logs. Remove personal information before sharing;
do not commit saves or logs.

Use the [issue forms](https://github.com/MasterSon-git/vic3-kmpmp/issues/new/choose).
If game or multiplayer testing was unavailable, say so and list remaining checks.
This maintenance change's checks are recorded in
[MAINTENANCE_VALIDATION.md](MAINTENANCE_VALIDATION.md).
