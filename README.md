# KMPMP — Karesak Multiplayer Mod Pack

KMPMP is a community mod pack for **Victoria 3 multiplayer**, published on Steam
Workshop as **Machiavelli MP Mod**. It combines and adapts community mods with
Karesak's own scripts, interface changes and balance choices for organised games.
It is an independent community project.

The source includes fortifications and combat engineers, expanded military
supplies, stockpiling, private-construction controls, canal and railway changes,
Power Bloc extensions, diplomatic tools, country content, and paper-map themes.
These systems are integrated here; enabling their standalone upstream mods as
well can cause conflicts. This list describes source content, not a guarantee
that every feature works on every game version or DLC combination.

## Play and test

Subscribe to [Machiavelli MP Mod on Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3009203637)
and enable it in a dedicated launcher playset. All multiplayer participants
should use the same game build, mod build, playset order and game rules.

The three checked-in metadata variants currently declare **1.13.11** support.
That declaration is not a new runtime certification. The separate
[1.15 compatibility PR #647](https://github.com/MasterSon-git/vic3-kmpmp/pull/647)
is ongoing; its changes are not part of this documentation work.
For local installations and the test variant, start with
[Development](docs/DEVELOPMENT.md) and [Testing](docs/TESTING.md).

## Repository guide

| Path | Purpose |
| --- | --- |
| `src/` | Shared mod payload, three metadata variants and thumbnails |
| `src_test/` | Test overlay applied after `src/`; currently directory placeholders |
| `scripts/` | PowerShell deployment helpers and a branch-cleanup utility |
| `docs/` | Development, testing and provenance audit |
| `LICENSES/` | Original-contribution licenses and preserved upstream license texts |
| [features.md](features.md) | Historical integration notes; not a current feature/support matrix |

## Contribute

Bug reports, reproducible saves, translations and focused improvements are
welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.
It is the authoritative policy for people and AI coding agents;
[AGENTS.md](AGENTS.md) adds agent-specific safeguards.
Use [GitHub issues](https://github.com/MasterSon-git/vic3-kmpmp/issues) for bugs,
feature proposals and compatibility reports. See [SUPPORT.md](SUPPORT.md) for
the information that helps us reproduce a problem and
[CHANGELOG.md](CHANGELOG.md) for release-oriented notes.

## Credits

Thanks to everyone, supporting development of this mod:
- Eiwei
  - Lead mod engineer, sampling of 3rd party mods and custom extensions are based on his contributions
- Yuki
  - Gui bugfixing and testing
- Tziplays
  - Was here
- Waysten
  - Pfuscht auch den ganzen Tag

Bundled upstream authors and projects are credited in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). The
[provenance audit](docs/PROVENANCE.md) records evidence, affected files,
permissions and open questions, including historical integrations.

## Licensing

Original KMPMP script code and repository tooling are offered under **0BSD**;
original KMPMP creative assets are offered under **CC0 1.0** to the extent KMPMP
contributors own those rights. No attribution is required for those original
contributions; voluntary credit is appreciated and commercial reuse is permitted.

**This is not a blanket license for this mod pack.** Third-party components,
vanilla-derived material and content of unresolved provenance are excluded from
that grant. Modified upstream content retains its upstream obligations.
Read [LICENSE.md](LICENSE.md) for the scope and exclusions and the
[third-party notices](THIRD_PARTY_NOTICES.md) before reusing any bundled material.
Several upstream permissions and asset origins remain unresolved; this repository
does not claim complete license clearance.
