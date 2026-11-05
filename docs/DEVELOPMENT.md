# Local development

## Source and installations

Use Git and PowerShell on Windows. Deployment uses Windows `robocopy`; there is
no compilation step or automated gameplay test suite on the audited `main` baseline.

`src/` is the common game payload. Its `.metadata/` directory contains
`metadata_kmpmp.json`, `metadata_kmpmp_test.json` and `metadata_kspmp.json`.
The scripts select one as the installed `.metadata/metadata.json` and select its
matching thumbnail. Review version declarations separately from documentation work.

`src_test/` is an overlay, not a second complete mod. The test deployment first
mirrors `src/`, then copies the overlay over it. Currently its tracked content
consists only of `_placeholder.txt`, `_placeholder.gui` and `_placeholder.yml`
directory markers, which the overlay copy excludes. Files added here can replace
matching `src/` files in the installed test variant. Track intentional test
overlays in Git; keep temporary experiments outside the repository.

Local installations default to
`%USERPROFILE%\Documents\Paradox Interactive\Victoria 3\mod\`.
If Documents is redirected (for example through OneDrive), inspect your launcher
location and supply `-Destination` explicitly. Workshop subscriptions under
`SteamApps\workshop\content\529340\` are separate installations; editing them
does not update this repository and Steam may overwrite them.

## Deploy a local variant

From the repository root:

```powershell
.\scripts\copy-to-vic3-kmpmp_test.ps1
```

Sources resolve relative to the scripts, so they can also run from another
working directory. Close the game before replacing an installation.
**These commands mirror their source and remove destination files absent from
it.** Never select a destination containing saves, personal files, a Git checkout
or another mod. Inspect the resolved absolute destination first. `-Destination`
is a complete mod folder path, not its parent.

| Script | Default mod folder | Contents |
| --- | --- | --- |
| `scripts/copy-to-vic3-kmpmp.ps1` | `vic3-kmpmp` | `src/`, production metadata and thumbnail |
| `scripts/copy-to-vic3-kmpmp_test.ps1` | `vic3-kmpmp-test` | `src/`, then `src_test/`, test metadata and thumbnail |
| `scripts/copy-to-vic3-kspmp.ps1` | `vic3-kspmp` | Existing single-player selection described below |

The single-player script retains its existing exclusions of directories named
`.metadata`, `defines` and `map`; it restores `gfx/map/textures/` and the custom
`common/defines/kmpmp_00_defines.txt` afterward. `map_data/` is not the directory
named `map` and remains part of the initial copy. Do not treat this variant as
identical to the multiplayer package or change those selections casually.
The basename exclusion also omits `localization/english/map/` and
`localization/german/map/`; the textures restoration does not restore them.

For a disposable packaging test without touching installed mods:

```powershell
$packageRoot = Join-Path $env:TEMP ('kmpmp-package-' + [guid]::NewGuid())
.\scripts\copy-to-vic3-kmpmp.ps1 -Destination (Join-Path $packageRoot 'production')
.\scripts\copy-to-vic3-kmpmp_test.ps1 -Destination (Join-Path $packageRoot 'test')
.\scripts\copy-to-vic3-kspmp.ps1 -Destination (Join-Path $packageRoot 'single-player')
```

Inspect metadata, thumbnails, representative game files and legal files in each
folder. Re-run deployment after source/notice changes. `robocopy` codes 0–7 are
nonfatal; codes 8 and above fail deployment. PowerShell copy failures also stop
the scripts. Successful deployment means files were copied, not that the game loaded.

Add the local test variant through the launcher if it is not already visible.
Enable only the intended build in a dedicated playset, disable the subscribed
copy of KMPMP and standalone versions of its bundled mods, and check the name,
version and checksum before testing. Follow [TESTING.md](TESTING.md).

## License notice packaging and Workshop uploads

The copy scripts prepare local mod directories; they do **not** upload to Steam.
After the game payload and test overlay, each invokes
`scripts/copy-legal-notices.ps1`. It copies the authoritative root `LICENSE.md`,
`THIRD_PARTY_NOTICES.md` and entire `LICENSES/` tree to the installed mod root.
Notices stay outside `common/`, `events/`, `gui/` and `localization/`, so they are
not introduced as game definitions. There is one maintained source of notices,
not three manually synchronized copies. Missing inputs fail the helper.

Before uploading through the launcher, inspect the **actual selected content
folder** for these files, including the three upstream MIT texts in
`LICENSES/third-party/`. Upload that complete folder without a notice-stripping
filter. For a custom/manual package, run the helper after assembling the payload:

```powershell
.\scripts\copy-legal-notices.ps1 -Destination 'C:\path\to\assembled-mod'
```

The helper expects an existing directory. After publishing, inspect a clean
downloaded Workshop copy for the same notice paths and byte contents. This final
upload/download check is a release step: local tests do not prove what Steam
served. See [the audit](PROVENANCE.md) for unresolved redistribution questions;
shipping notices alone cannot settle them.

## Editing and references

Read [CONTRIBUTING.md](../CONTRIBUTING.md) for source conventions and workflow.
Use installed game files and generated docs under
`Documents\Paradox Interactive\Victoria 3\docs\` for target-build references.
The checked-in `.code-workspace` lists machine-specific game/Workshop folders;
adjust a local workspace copy for your machine. Treat external references,
especially a vanilla Git repository, as read-only. Do not commit proprietary
reference dumps.

`scripts/git-delete-local-branches-not-on-remote.ps1` switches to `main`, prunes
remote references and force-deletes local branches whose upstream is gone.
It is an optional destructive personal utility, **not** a development,
validation or deployment step. Do not run it during task setup.

Use issues for unresolved work, PRs for completed decisions, and `CHANGELOG.md`
for release-level changes. Do not commit local logs, saves or generated artifacts.
