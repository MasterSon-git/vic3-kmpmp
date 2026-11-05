# Contributing to KMPMP

These are the development rules for human contributors and coding agents.
Keep changes focused and practical for a community-maintained multiplayer modpack.

## Workflow

- Search existing issues and PRs. Discuss larger gameplay or balance proposals
  with maintainers before implementing them; routine fixes can go straight to a PR.
- Start independent work from current `main` on a descriptive branch. Keep each
  PR focused, link related issues and use Draft while work is incomplete.
- Explain the purpose, gameplay/compatibility effects and testing in the PR.
  Leave merging to maintainer review.
- Preserve unrelated local changes. Keep generated installations, logs, saves,
  personal settings and vanilla reference copies out of commits.

## Modding conventions

- Follow nearby formatting, preserve load-order filenames and upstream prefixes,
  and use `kmpmp_` for new original definitions where appropriate.
- Verify compatibility work against actual game files and script documentation
  for the target build. Preserve established gameplay, balance, triggers and
  rewards unless an intentional change is part of the task.
- Keep overrides small. Avoid broad cleanup or restructuring in an unrelated fix.
  Review all affected variants before changing compatibility declarations.
- Preserve file encoding, including UTF-8 BOMs and language headers in localization.
  Add English/German strings for new visible keys, or note missing translations.

**Commented-out code is not a historical archive.** Remove obsolete implementations.
Use Git history for old code, PRs for completed migration decisions, issues for
unresolved work, and comments to explain current behaviour or technical constraints.
Explain any necessary disabled workaround briefly.

## Testing and documentation

Follow [Development and testing](docs/DEVELOPMENT.md). Run checks appropriate to
the change, inspect relevant logs and run `git diff --check`. Test gameplay
changes in a fresh or reproducible saved campaign; test multiplayer-affecting
changes with matching builds when possible.

Report what you actually tested and what remains untested. Update affected
documentation when behaviour or workflow changes; detailed test results and
migration notes belong in the PR.

## Upstream work and licensing

Original KMPMP contributions are licensed as described in [LICENSE.md](LICENSE.md).
Contribute only work you have the rights to license under those terms. When
importing or adapting upstream work, identify its project, author, source and
known reuse terms in the PR. Add voluntary thanks to
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md); keep license obligations in
`LICENSE.md` and preserve the full upstream license texts. Required notices must
also ship in mod packages, including test builds.

Do not present third-party material as original KMPMP work or assume public
availability is permission. Follow the third-party policy in `LICENSE.md`;
routine maintenance does not require an author-contact campaign or a file-level
ownership inventory. Do not open additional licensing issues without
explicit maintainer authorization.

Keep discussions respectful and focused on the mod. Avoid personal attacks and
posting private information.
