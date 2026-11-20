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
- For in-game checks, use a fresh campaign or a reproducible save just before
  the affected action. Check pulses, save/reload and behavior across builds as
  relevant to the question.
- When testing multiplayer, use matching builds, playset order and game rules on
  host and clients. Check the affected actions and save/rehost or hotjoin where
  relevant; retain host/client evidence if a desync occurs.
- Inspect `logs/error.log` and `logs/game.log` under the Victoria 3 user-data
  folder; `logs/system.log` can help with startup problems. Copy logs before
  relaunching. For a bug report, include expected/actual behaviour, country/date,
  exact steps, relevant DLC, a pre-problem save and useful log excerpts.
  Remove private information before sharing.
- Record the checks performed and material gaps in the PR.

Use [GitHub issues](https://github.com/MasterSon-git/vic3-kmpmp/issues/new/choose)
for reports and proposals.

## Effective-modifier validation

Use Node.js 18.15+ from the mod repository root. For an ordinary PR, compare the
merge base and proposed mod against the same installed game directory.

```powershell
$base = git merge-base origin/main HEAD
node scripts/validate-effective-modifiers.cjs --vanilla $gameDir --mod-base $base --mod-head HEAD
```

For compatibility updates, identify the previous and target vanilla snapshots
and the corresponding mod revisions. For a vanilla reference Git repository
with `src/game/common`, `game/common` or `common` at its root, run

```powershell
node scripts/validate-effective-modifiers.cjs --vanilla $vanillaRepo --old-vanilla-ref $oldGameRef --vanilla-ref $newGameRef --mod-base $oldModRef --mod-head $newModRef
```

Omit `--vanilla-ref` to read the current game files, including untracked files.
Use `--old-vanilla $oldGameDir` for a separate previous installation. Omit both
old-vanilla options to reuse the current game snapshot. Omit `--mod-head`
to check local edits under `src/`. For historical pre-entry-mode mod bases
only, `--legacy-base` enables the former implicit full-replacement behavior.
The commands read Git objects directly and leave reference checkouts intact.

The report groups new/changed and existing findings and previews five per
severity. Use `--definition ID` or `--all` for details. Each numeric result
shows the inherited vanilla value, any bundled mod base, the sum of injected
mod contributions, the effective value, and its previous value.

- **ERROR** means a conversion broke the prior total on an unchanged vanilla
  field, or a documented effective value failed. A new/changed error exits 1.
- **REVIEW** identifies duplicate contributions or flags, effective-value
  changes, uncertain merges, and changed vanilla paths masked by replacements.
  Inspect the indicated sources and resolve intent in the PR. Existing findings
  remain visible. Exit 0 allows review findings. Exit 2 indicates an input error.
- **ACCEPTED** means the total matches a reviewed requirement. Record a durable
  numeric requirement sparingly in `scripts/modifier-intent.json`, keyed by
  database/definition/complete field path, with its effective value and reason.
  Each mod revision supplies its own requirements.

The checker applies same-path file shadowing and entry modes to the shared
payload. `INJECT` adds to an existing modifier list and `REPLACE` discards the
earlier entry. A missing target is reported for either strict mode, skipped
for `TRY_*`, and created for `*_OR_CREATE`. The supported databases and
recipient paths are listed in [the schema table](../scripts/effective-modifiers.cjs).
The table follows the installed `common/` schemas, including
`production_methods/production_methods.md`. Generated `docs/modifiers.log`
can help verify modifier identities for the build in question.
[Paradox documents the entry modes and additive arithmetic in Dev Diary 164.](https://forum.paradoxplaza.com/forum/developer-diary/victoria-3-dev-diary-164-marvelous-modding-monday.1868975/)

Arithmetic covers direct numeric literals up to six decimal places in these
containers and registered keys at the root of static modifiers. Boolean flags,
expressions, repeated blocks and ordinary fields require source review.
Totals describe isolated script contributions. External playsets, DLC gates,
test overlays, runtime scaling and databases outside the table require
separate inspection. Run the deterministic fixtures with
`node --test --test-reporter=tap scripts/test-effective-modifiers.cjs`.

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
