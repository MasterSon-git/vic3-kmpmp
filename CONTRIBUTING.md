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
- Resolve in-scope corrections in the current PR. Use separate issues for concrete
  defects or meaningful, actionable improvements outside its scope.
- Preserve unrelated local changes. Keep generated installations, logs, saves,
  personal settings and vanilla reference copies out of commits.

## Modding conventions

- Follow nearby formatting, preserve load-order filenames and upstream prefixes,
  and use `kmpmp_` for new original definitions where appropriate.
- Verify compatibility work against actual game files and script documentation
  for the target build. Preserve intentional KMPMP gameplay and balance changes;
  follow the vanilla-update policy below when upstream behavior changes.
- Keep overrides small. Avoid broad cleanup or restructuring in an unrelated fix.
  Review all affected variants before changing compatibility declarations.
- Preserve file encoding, including UTF-8 BOMs and language headers in localization.
  Provide English and German localization for new player-facing text, or note
  any missing translations.

**Commented-out code is not a historical archive.** Remove obsolete implementations.
Use Git history for old code, PRs for completed migration decisions, issues for
unresolved work, and comments to explain current behaviour or technical constraints.
Explain any necessary disabled workaround briefly.

## Database entry modes and modifiers

- When converting a full replacement to an injection, preserve the former
  effective contribution at each recipient and scaling path unless a balance
  change has been approved. Calculate each additive delta as the intended
  total minus the base that will actually load, including bundled definitions.
- During a vanilla update, leave new vanilla modifiers to inheritance in
  existing injections. Add a delta only for an intentional KMPMP difference.
  Recalculate totals even for untouched injections when their base changes.
- For changes to modifier overrides and for vanilla updates, run the
  [effective-modifier check](docs/DEVELOPMENT.md#effective-modifier-validation).
  Review new findings, including upstream fields masked by full replacements.
  Verify uncertain merge behavior against the game schema or other evidence
  before relying on a calculated value. Document intentional additions and
  their effective values in the PR.

## Vanilla updates

Follow updated vanilla behavior wherever it is compatible with the purpose of
our mod changes. Preserve KMPMP's design intent when vanilla mechanics change.
Historical values and exact gameplay outcomes may change in support of that
intent. Include focused balance adjustments needed for compatibility in the
version update and seek maintainer approval for substantial balance changes.

- Compare old vanilla, the existing mod and new vanilla at the definition and
  field level. Include full replacements, injections and inherited helpers;
  matching filenames alone is insufficient.
- Establish why an affected mod override exists before deciding what to retain.
  Use its diff against old vanilla and relevant code comments, Git history,
  issues or PRs. Copied vanilla fields are not intentional custom balance merely
  because they appear in a mod file.
- Carry over relevant upstream changes that do not conflict with that purpose,
  including new fields inside full replacements. Assess custom values against
  current vanilla strengths, costs, alternatives and plausible stacking.
- Account for relevant upstream changes in the PR as inherited, ported, excluded
  or unresolved. Group related inherited changes to keep the summary concise.
  For each exclusion, name the affected definition, the mod goal being protected,
  the concrete conflict or balance impact and supporting source/issue/PR.
  Uncertainty is not evidence of an intentional exception: leave it unresolved
  and ask the maintainer when a decision is needed.
- In new or touched overrides, explain the purpose of intentional deviations in
  a concise source comment, with an issue/PR reference where available. Keep
  version-specific audit results in the PR, not in general documentation or
  commented-out implementations.

## Testing and documentation

Follow [Development and testing](docs/DEVELOPMENT.md). Run relevant static checks
and `git diff --check`. Source inspection, established engine semantics, static
checks and balance judgment grounded in current vanilla can provide sufficient
confidence. Use runtime tests to address material uncertainties or concrete
risks, at a scale the project can sustain. The need for campaign or multiplayer
testing depends on the change.

Report the checks performed, what they establish and any material gaps. Describe
parsing, headless loading and in-game tests at their actual scope. Update
documentation when behaviour or workflow changes.

**Documentation scope:** Keep general documentation (such as
`docs/DEVELOPMENT.md`) focused on reusable development procedures,
architecture, conventions and operational constraints. Do not add
issue-specific test matrices, acceptance criteria, implementation summaries
or feature-specific validation instructions there; keep those in the
relevant GitHub issue or pull request. Add to general documentation only
when the guidance remains useful across independent development tasks.
Review documentation changes for this distinction before opening a PR.

## Issues, pull requests and documentation

**Describe the current state, not the history of getting there.** Write issues
and pull requests for someone reading them later: explain the goal, what changed
or is proposed, relevant validation and remaining blockers or decisions.
Update the opening description as work progresses instead of appending a running
log of commits, attempts, investigations or repeated test results.

Keep issue-specific validation requirements proportional to the proposed change.
For straightforward changes using established script mechanics, such as adjusting
modifier values, source inspection and relevant static checks are generally
sufficient. Require runtime tests only to resolve concrete uncertainties or
material risks. Clearly distinguish mandatory acceptance criteria from optional
testing suggestions. Do not require save/reload, multiplayer testing or extensive
gameplay simulations by default.

Keep validation in the issue or PR description concise: state relevant checks,
outcomes and important gaps. Discussion comments may record useful intermediate
findings, decisions, progress updates or focused test details in reasonable
amounts. Avoid step-by-step work diaries, repeated status updates, raw logs and
self-congratulatory summaries. Incorporate lasting conclusions into the main
description; use Git history for older implementations, and keep permanent
documentation focused on current behaviour and lasting constraints.

## Upstream work and licensing

Original KMPMP contributions are licensed as described in [LICENSE.md](LICENSE.md).
Only present work as original KMPMP material if you hold the rights to
license it under those terms. When importing or adapting upstream work,
identify its project, author, source and known reuse terms in the PR.
Acknowledge the original authors and projects in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
Keep license obligations in `LICENSE.md` and preserve the full upstream license
texts. Required notices must also ship in mod packages, including test builds.

Do not present third-party material as original KMPMP work or assume that
publicly available content is free to reuse. See [LICENSE.md](LICENSE.md) for
the license scope and required notices.

Keep discussions respectful and focused on the mod. Avoid personal attacks and
posting private information.
