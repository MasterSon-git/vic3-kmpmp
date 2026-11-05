# Development and testing

Use Git and PowerShell on Windows. The mod needs no compilation; the deployment
scripts use `robocopy`. See [CONTRIBUTING.md](../CONTRIBUTING.md) for development rules.

## Source and variants

`src/` is the shared mod payload. The scripts select a variant's metadata from
`src/.metadata/` and its matching thumbnail. `src_test/` is an overlay applied
after `src/`; it currently holds directory placeholders, which are excluded
from deployment. Add intentional test overrides there rather than duplicating
the whole mod.

Run these commands from the repository root. The scripts resolve their source
paths relative to their own location, so they also work when invoked using
full paths from another directory:

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
- Run `git diff --check` and appropriate checks for changed scripts,
  localization or packaging. State skipped game/multiplayer tests in the PR.

Use [GitHub issues](https://github.com/MasterSon-git/vic3-kmpmp/issues/new/choose)
for reports and proposals.

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
