# Development and testing

Use Git and PowerShell on Windows. The mod needs no compilation; the deployment
scripts use `robocopy`. See [CONTRIBUTING.md](../CONTRIBUTING.md) for development rules.

## Source and variants

`src/` is the shared mod payload. The scripts select a variant's metadata from
`src/.metadata/` and its matching thumbnail. `src_test/` is an overlay applied
after `src/`; it currently holds directory placeholders, which are excluded
from deployment. Add intentional test overrides there rather than duplicating
the whole mod.

Run these commands from the repository root, or invoke them by absolute path
from another directory. Each script resolves its source paths relative to its
own location:

| Command | Default local mod folder |
| --- | --- |
| `.\scripts\copy-to-vic3-kmpmp.ps1` | `vic3-kmpmp` |
| `.\scripts\copy-to-vic3-kmpmp_test.ps1` | `vic3-kmpmp-test` |
| `.\scripts\copy-to-vic3-kspmp.ps1` | `vic3-kspmp` |

Folders default to `%USERPROFILE%\Documents\Paradox Interactive\Victoria 3\mod\`.
Use `-Destination` with a complete mod-folder path if Documents is redirected
or you want an isolated copy:

```powershell
$testMod = Join-Path $env:TEMP ('kmpmp-test-' + [guid]::NewGuid())
.\scripts\copy-to-vic3-kmpmp_test.ps1 -Destination $testMod
```

**Deployment mirrors the source and deletes extra destination files.** Check the
absolute destination first; never point it at a Git checkout, saves or personal
files. Close the game before replacing its mod folder.

The single-player variant excludes directories named `defines` and `map`,
then restores `gfx/map/textures/` and `common/defines/kmpmp_00_defines.txt`.
This also excludes localization `map/` folders; `map_data/` remains included.
Production and test copy the full shared payload.

Enable the intended local variant in a dedicated launcher playset. Disable other
copies of KMPMP and standalone bundled mods. Treat installed vanilla files and
Workshop subscriptions as read-only references. The workspace paths are
machine-specific. The branch-cleanup script force-deletes local branches and
is not needed for normal development.

## Testing and bug reports

- Record game version/checksum, KMPMP build/variant, enabled DLC and playset order.
  Keep a copy of valued saves before testing.
- Start a fresh campaign or a save just before the problem, exercise the affected
  feature across relevant daily/weekly/monthly pulses, then save and reload.
  Compare behaviour with the previous build to catch unintended balance changes.
- For multiplayer changes, use matching builds, playset order and game rules on
  host and clients. Check the affected actions and save/rehost or hotjoin where
  relevant; retain host/client evidence if a desync occurs.
- Inspect `logs/error.log` and `logs/game.log` under the Victoria 3 user-data
  folder; `logs/system.log` can help with startup problems. Copy logs before
  relaunching. For a bug report, include expected/actual behaviour, country/date,
  exact steps, relevant DLC, a pre-problem save and useful log excerpts.
  Remove private information before sharing.
- Run unattended engine probes with an isolated user profile and mute its
  `Audio` settings: set `volume.bus:/` and every `volume.vca:/...` category to
  zero before launch. A null renderer does not disable audio.
- Run `git diff --check` and appropriate checks for changed scripts,
  localization or packaging. State skipped game/multiplayer tests in the PR.

Use [GitHub issues](https://github.com/MasterSon-git/vic3-kmpmp/issues/new/choose)
for reports and proposals.

### Military Goods Shortage presentation

Run `node scripts/validate-1.15.cjs` for static compatibility checks, including
price boundaries, all 16 supported modifier tiers, applied-versus-current-price
fixtures, read-only selectors and English/German tooltip coverage. These fixtures
evaluate script conditions outside the game; they do not validate engine or UI
behaviour.

The native JE status reads modifiers on the active JE instance. Hover a tier for
the actual static-modifier breakdown and its change thresholds. The description
lists current market-price bands separately, because the weekly pulse may not
have applied them yet. Aeroplane tiers currently have no gameplay effects; the UI
reports that existing limitation without introducing new effects.

For changes to this presentation, check the following in a disposable campaign
with English and German, both without State & Revolution and with it enabled:

| Scenario | Expected result |
| --- | --- |
| No modifiers, including high prices before the first pulse | Explicit no-applied-penalty status; current price conditions remain separate. |
| Each supported tier, then several goods together | Correct good/tier; hover shows native effects, current price band and downgrade/removal thresholds. |
| Prices immediately below, at and above +50%, +60%, +75% | Low/medium/high boundaries match the existing predicates; radios/aeroplanes never show low. |
| Price changes between weekly pulses | Applied tier stays unchanged until the pulse; current price band changes independently. |
| Enter, leave and reenter committed diplomatic-play participation | Temporary JE appears, is removed with its modifiers, and can return; no concluded entry or completion message. |
| Save/reload before and after a weekly pulse | Applied modifiers and status survive; subsequent weekly evaluation still works. |
| Open the JE and hover every tier while paused | No modifier, variable or other game-state changes; no tooltip errors, raw keys or clipped text. |

Retain screenshots of no penalties, several applied tiers and a tier tooltip,
and inspect fresh logs. Multiplayer verification additionally requires matching
host/client builds and a save/rehost or hotjoin check. Transition notifications
remain separate work under #432: validate weekly changes and JE-removal timing,
notify only the affected player, and avoid repeated weekly notices.

## Notices and Workshop publishing

Each deployment calls `scripts/copy-legal-notices.ps1` after copying the payload.
It checks and copies `LICENSE.md`, `THIRD_PARTY_NOTICES.md` and `LICENSES/`
to the mod root, outside game-definition folders. Native copy errors
(`robocopy` codes 8 or higher) and missing required notices stop deployment.

For packaging changes, test all three variants in disposable folders and check
metadata, thumbnails and legal files. For a manually assembled package, run
`.\scripts\copy-legal-notices.ps1 -Destination 'C:\path\to\assembled-mod'`.

The scripts prepare local folders; upload the complete selected folder through
the launcher. Check the notices are present before uploading and in a downloaded
Workshop copy afterward. The three MIT texts in `LICENSES/third-party/` must
remain included.
