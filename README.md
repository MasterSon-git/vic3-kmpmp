# KMPMP — Karesak Multiplayer Mod Pack

KMPMP is a community mod pack for **Victoria 3 multiplayer**, published as
[Machiavelli MP Mod on Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3009203637).
It combines adapted community mods with features, interface changes and balance
adjustments developed by KMPMP contributors for organised multiplayer games.

Features include fortifications and engineers, military supplies and stockpiling,
private-construction controls, canal and railway changes, selected Power Bloc
functionality, diplomatic tools, country content and paper-map themes.

## Installation and development

Subscribe on Workshop and enable KMPMP in a dedicated launcher playset. Avoid
enabling standalone copies of its bundled mods alongside it. All multiplayer
participants should use matching game and mod versions, playset order and game
rules.

Check the [mod metadata](src/.metadata/metadata_kmpmp.json) for the declared game
version. See [Development and testing](docs/DEVELOPMENT.md) for local installation,
test variants and bug-report information.

| Path | Purpose |
| --- | --- |
| `src/` | Shared mod payload, metadata variants and thumbnails |
| `src_test/` | Overlay for the test variant |
| `scripts/` | PowerShell deployment helpers |
| `docs/DEVELOPMENT.md` | Local workflow and testing |
| `LICENSES/` | Original-contribution and upstream license texts |
| [features.md](features.md) | Earlier feature notes |

## Contribute

Bug reports, translations and focused improvements are welcome.
[CONTRIBUTING.md](CONTRIBUTING.md) is the authoritative development policy;
[AGENTS.md](AGENTS.md) adds safeguards for AI coding agents.
Use [GitHub issues](https://github.com/MasterSon-git/vic3-kmpmp/issues) for
reproducible bugs and proposals.

## Credits

Thanks to everyone who has helped shape and develop KMPMP:
- Eiwei
  - Concept and overall design direction; the driving force behind KMPMP.
- Yuki
  - GUI bug fixes and testing
- Tziplays
  - Was here
- Waysten
  - Pfuscht auch den ganzen Tag

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for upstream projects,
authors and source links.

## Licensing

Original KMPMP code uses **0BSD**; original creative contributions use **CC0 1.0**.
Attribution for that original work is optional and appreciated; commercial reuse
is permitted. Third-party and game-derived material retains its own terms and
is excluded from these grants. See [LICENSE.md](LICENSE.md) for the scope.
