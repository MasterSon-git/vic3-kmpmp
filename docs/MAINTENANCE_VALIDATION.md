# Maintenance validation — 2026-11-05

Scope: documentation, contribution policy, templates, licensing records and legal
notice deployment, based on `main` at `df1521a`. This work is independent of
the 1.15 compatibility PR #647.

## Repository and documentation

- The initial working tree was clean. A dedicated branch,
  `docs/community-licensing-foundation`, was created from fetched `origin/main`.
- Markdown was parsed using `markdown-it`; relative file links and heading
  fragments were checked for existence. A separate content check confirms the
  existing README contributor-credit block is preserved, allowing only newline
  normalization in the comparison. Historical `features.md` entries are retained.
- All three issue forms were parsed with the `yaml` parser using unique-key
  checking. Name/description/body, field types, unique IDs, labels and required
  booleans were checked. The PR template includes all six requested sections.
  GitHub's rendered form preview remains a post-push manual check.
- The CSV covers all 923 tracked baseline files under `src/` and `src_test/`.
  Each recorded path and SHA-256 was checked against the working tree, and each
  first-path addition commit is recorded. Candidate provenance remains explicitly
  distinct from proof of ownership or reuse permission.
- Read the final policy documents together: `CONTRIBUTING.md` is authoritative;
  `AGENTS.md` references it and adds safeguards. README links both and states the
  same scoped licensing and unresolved-clearance limits.

## Licensing

- Verified full MIT texts for FAE, GGGG and ASE against upstream GitHub files;
  preserve their copyright lines, permission grant and warranty exclusions.
  Pinned sources and license blob IDs are recorded in `PROVENANCE.md`.
- Included the standard 0BSD and CC0 1.0 texts. Their applicability is limited
  by `LICENSE.md`; no bulk SPDX headers or whole-repository relicensing occurred.
- Retained the ASE based-on credit, upstream credits and the published
  continuation-permission excerpt/source for Kate the Sibyl's two mods.
- Unknown licenses, asset ingredients, merged-file boundaries and game-derived
  material remain open blockers in the audit. No complete compliance claim is made.

## Deployment checks

Ran all three PowerShell deployment scripts against new, absolute destinations
under the operating-system temporary directory, from outside the repository.
No installed production/test mods or vanilla/Workshop source files were modified.
A temporary harness independently compared every expected payload file and
rejected unexpected files, rather than checking only a few representative paths.

| Variant | Unchanged payload files compared | Other checks |
| --- | ---: | --- |
| Production | 808 | Selected metadata and thumbnail; seven legal files match repository bytes |
| Test | 808 | Selected test metadata/thumbnail; placeholders omitted; seven legal files match |
| Single-player | 715 | Existing exclusions/restorations preserved; metadata/thumbnail and seven legal files match |

Each was deployed twice. Mirroring removed a seeded stale file; notice files
were restored correctly after the mirror; no nested `LICENSES/LICENSES` directory
appeared. All package contents, including original game payload bytes, matched
the expected selection. The test overlay currently has no non-placeholder game
files; no synthetic overlay was added to the source tree.

Confirmed the existing single-player `/XD map` selection also omits the English
and German localization `map/` directories. It restores only `gfx/map/textures/`
afterward. This behaviour is documented and preserved, not redesigned here.

Failure checks used disposable fixtures and an intercepted `robocopy`, with no
changes to production inputs: a missing destination fails, a missing required
MIT text fails before any notice is copied, and native copy failure code 8 stops
each of the three deployment scripts. PowerShell's parser reports no syntax
errors in the scripts.

The final notice helper checks all seven required legal files before copying;
its output contains both root notices, two original-contribution license texts
and three upstream MIT texts. After the helper's missing-file checks were
strengthened, the deployment comparisons were run again.

## Diff and limits

`git diff --check` and the staged equivalent pass. `git diff df1521a -- src
src_test` is empty: no gameplay, balance, metadata version, source-tree layout,
localization or third-party payload changes. No changes from PR #647 were imported.
No vanilla files or external Git state were changed.

No game launch, campaign regression, multiplayer session, Steam upload or clean
Workshop re-download was performed for this documentation/packaging task.
The local folders preserve known required notices; verify the actual uploaded
content folder and downloaded package using the release checklist in
[DEVELOPMENT.md](DEVELOPMENT.md). Existing Workshop publications are not changed
by this PR. Licensing follow-up remains necessary before claiming complete clearance.

The practical support and conduct guidance lives in `SUPPORT.md` and
`CONTRIBUTING.md`. Separate conduct/security templates were not added because no
distinct moderation process or private reporting contact has been established.
