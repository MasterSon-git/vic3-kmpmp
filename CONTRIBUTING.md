# Contributing to KMPMP

This is the authoritative contribution policy for human contributors and coding
agents. KMPMP combines upstream mods with established multiplayer gameplay and
balance. A small compatibility fix can affect a whole campaign: make changes
focused, explain their effect, and preserve unrelated behaviour.

## Issues and pull requests

- Search existing issues and PRs first. Use the bug, feature or compatibility
  form when it fits; incomplete information can be added later.
- Discuss new mechanics, balance changes, dependencies and broad refactors in
  an issue before implementing them. Routine fixes and documentation can go
  straight to a PR. Explain intentional behaviour changes explicitly.
- Branch from current `main` for independent work. Use a descriptive branch and
  a focused PR targeting `main`; use Draft while work or validation is incomplete.
  Do not mix a separate task into another open PR or push to another person's
  branch without agreement. Link related issues; use closing keywords only when
  the issue's acceptance criteria are actually satisfied.
- Keep unrelated local changes intact. Do not commit generated mod installations,
  personal launcher settings, saves, logs or proprietary vanilla reference files.
- A maintainer reviews scope, gameplay, compatibility, tests and licensing before
  merging. Address feedback or explain a disagreement; do not merge your own work
  just because checks pass. Small PRs are easier to review.

## Compatibility and gameplay

Verify compatibility changes against the actual Victoria 3 files and generated
script documentation for the **target build**, not memory or another mod's older
copy. Record the build, relevant files and changed engine interfaces in the PR.
Do not raise `supported_game_version` without evidence and review. Keep all three
metadata variants in mind and state save-game or DLC implications.

Preserve established triggers, rewards, timing, formulas, scopes and balance
values unless a deliberate design change is part of the agreed scope. Compare
with the previous implementation and distinguish a new regression from an
existing warning. Avoid unrelated cleanup during a game-version migration.

## Source conventions

- Follow nearby Paradox script/GUI formatting and existing indentation. Avoid
  whole-file whitespace changes. Use descriptive identifiers and the `kmpmp_`
  namespace for new original definitions where appropriate; preserve upstream
  names and prefixes when adapting an existing component.
- Keep load-order filenames and replace/injection semantics intentional. Check
  the target version's syntax before replacing a vanilla definition. Prefer the
  smallest override that preserves behaviour and remains understandable.
- Preserve text encoding. Victoria 3 localization uses UTF-8 with BOM, language
  headers and escaped strings; add corresponding English/German text when
  introducing player-visible keys, or identify a missing translation in the PR.
- Comments explain current behaviour, non-obvious decisions and important
  technical constraints. Preserve copyright and permission notices.

**Commented-out code is not a historical archive.** Remove obsolete
implementations instead of retaining disabled copies. Use Git history for
previous implementations, pull requests for completed migration decisions,
issues for unresolved work, and code comments for current behaviour and important
technical constraints. A necessary disabled engine workaround needs a concise
reason and a tracked follow-up. This policy does not authorize bulk cleanup of
existing third-party files in an unrelated PR.

## Testing and documentation

Follow [Development](docs/DEVELOPMENT.md) and [Testing](docs/TESTING.md).
Run checks appropriate to the change, including `git diff --check`. For gameplay
changes, use an isolated test installation, inspect new log errors and test the
affected path in a fresh or reproducible saved campaign. Multiplayer-affecting
changes need matching-build multiplayer checks, or an explicit outstanding test
list. Static parsing alone does not demonstrate correct gameplay or desync safety.

Record exactly what was run, its results and limitations. If you cannot run the
game, say so; do not claim runtime validation. Update affected documentation and
add an `Unreleased` changelog entry for user-visible changes. Put detailed
implementation history and migration decisions in the PR, not the changelog.
Do not create tests that merely restate a trivial edit; add reusable checks when
they guard meaningful behaviour or packaging requirements.

## Licensing and attribution

Read [LICENSE.md](LICENSE.md), [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)
and [the audit](docs/PROVENANCE.md) before importing or reusing content.
Original contributions use the project's 0BSD/CC0 scopes; there is no mandatory
credit for original KMPMP work. By submitting original work, you make it available
under those applicable terms. Identify anything you do not own or cannot license.
No separate contributor agreement or renewed approval process is required.

For imported or modified upstream content, supply the original author, source
URL, version/commit where available, affected paths, license text or explicit
published permission and any asset/translation dependencies. Public availability
is not permission. Keep upstream copyright/license notices even after extensive
maintenance; KMPMP's original changes do not relicense the underlying work.
Update the notices and provenance inventory, and ensure required notices are
included in **all distributed packages**, including test builds. For original
assets, record authorship and source ingredients before marking them CC0.
Record unresolved rights questions openly; do not present uncertain material as
cleared or add new imports whose redistribution rights cannot be established.

## Working together

Discuss code and evidence respectfully. Avoid personal attacks, harassment and
posting private information. Keep bug reports factual and design disagreements
focused on the effect on multiplayer games. Maintainers can ask for revisions or
close abusive or off-topic discussions; there is no promised response deadline.
