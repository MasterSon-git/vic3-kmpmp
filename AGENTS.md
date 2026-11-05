# AI coding agents

Read [CONTRIBUTING.md](CONTRIBUTING.md) first. It is the authoritative policy;
these instructions add safeguards for automated work.

- Inspect Git status, the active branch and applicable local instructions before
  editing. Preserve unrelated tracked/untracked changes and never reset, clean,
  stash or overwrite someone else's work to make a task easier.
- For independent tasks, branch from current `main`. Respect existing issue/PR
  scope; do not reuse an unrelated branch, commit/push to it, change its PR or
  merge a PR without authorization. In particular, keep independent work separate
  from the ongoing 1.15 compatibility PR #647.
- For compatibility work, inspect actual target-version game files and generated
  script docs. Report the version and evidence; do not infer engine APIs from
  memory. Preserve existing gameplay and balance unless the task authorizes a
  deliberate change.
- Treat the external vanilla installation/repository and Workshop references as
  read-only. Do not edit, checkout, reset, clean, stage, commit or otherwise alter
  their Git state. Run Git commands with an explicit working directory; keep
  copied references and experiments outside those repositories and out of commits.
- Keep edits narrow. Do not restructure the source tree, broadly refactor or
  remove third-party material without task authorization. Respect the licensing
  exclusions even for files named `kmpmp_*`.
- Deployment mirrors directories. Use disposable destinations for experiments;
  verify the absolute target before running any mirroring operation. Do not run
  the branch-deletion utility as part of routine work.
- Review the final diff. Report actual checks, failures, skipped runtime or
  multiplayer tests and remaining uncertainties honestly. Never label a parse,
  headless load or documentation check as a played multiplayer test.
