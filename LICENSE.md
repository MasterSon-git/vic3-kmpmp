# Licensing scope

KMPMP is a compilation of original community contributions, adapted third-party
mods and game-derived material. **No single license covers every file.** The
community's existing agreement to freely license its own contributions is the
basis of the grants below; it does not convey anyone else's rights.

## Original KMPMP contributions

| Material owned by KMPMP contributors | Terms |
| --- | --- |
| Original Paradox script code, GUI code and repository tooling | [0BSD](LICENSES/0BSD.txt) |
| Original creative assets, including graphics, icons and original localization prose | [CC0 1.0 Universal](LICENSES/CC0-1.0.txt) |
| Original repository documentation and templates introduced by this maintenance work | [0BSD](LICENSES/0BSD.txt) |

These grants permit modification, redistribution and commercial reuse of the
eligible original contributions. Attribution is not mandatory; voluntary credit
to KMPMP and its contributors is appreciated. Standard warranty exclusions apply.
The texts are reproduced from the [SPDX license list](https://github.com/spdx/license-list-data/tree/main/text);
see also [OSI's 0BSD text](https://opensource.org/license/0bsd) and
[Creative Commons' CC0 legal code](https://creativecommons.org/publicdomain/zero/1.0/legalcode.en).

## Exclusions and mixed files

- Third-party code, assets, translations and other material retain their own
  copyright and terms. This applies both to modified integrations and to files
  distributed substantially unchanged. Preserve all required upstream notices.
- Vanilla Victoria 3/Paradox material, including copied or adapted scripts,
  interfaces, data and artwork, is excluded. No ownership or independent reuse
  license for that material is asserted here. Use remains subject to applicable
  game/modding terms; KMPMP's grant is not a license to distribute game assets
  independently.
- A KMPMP filename, namespace, translation or maintenance commit does not prove
  that an entire file is original. An original change to a mixed file is offered
  under the applicable original-contribution terms only to the extent separable
  and owned by its contributor. Reuse of the whole file must satisfy all upstream
  conditions; it cannot be labelled solely 0BSD or CC0.
- Content with unresolved authorship or permission is **not granted** 0BSD or CC0
  as a whole. A missing license is not an unrestricted license. Do not rely on
  the original-contribution grant to reuse uncertain material.
- No trademark rights or endorsement by Paradox or upstream authors are granted.

[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) is the distribution notice.
[docs/PROVENANCE.md](docs/PROVENANCE.md) and its
[file inventory](docs/provenance-files.csv) identify known integrations, evidence,
and unresolved cases. They are an audit record, not a certificate that all other
files are original. No existing bitmap asset is certified as wholly original
solely by this audit; asset ingredients still need individual confirmation.

## Applying and maintaining the scope

The original-contribution grant takes effect for eligible community-owned work
without requiring contributors to repeat their existing agreement. No per-file
license header has been added indiscriminately. The inventory is deliberately
conservative: unclassified files require provenance review before whole-file
reuse, even though eligible original portions are covered by the grant above.

For new original files, identify the author and applicable scope in the PR; for
assets, record source ingredients and whether they are wholly original. For an
upstream import, preserve its notice and add its permission, exact source and
affected paths to the audit. Resolve mixed-file boundaries before assigning a
whole-file SPDX identifier. Never replace an upstream license with KMPMP's terms.

Deployment scripts copy this file, the third-party notices and `LICENSES/` to
the root of every local package. Manual distributors must include the same files.
Including notices addresses known notice obligations; it does **not** resolve
the open permission and asset-origin questions listed in the audit. Complete
redistribution clearance remains blocked on those cases.
