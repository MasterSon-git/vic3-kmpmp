# AI coding agents

Read [CONTRIBUTING.md](CONTRIBUTING.md) first; it is the authoritative development
policy. These safeguards apply to automated work:

- Check Git status and the active branch before editing. Preserve unrelated
  tracked/untracked changes; do not reset, clean, stash or overwrite others' work.
- Follow the task's branch and PR instructions. Keep unrelated tasks separate;
  do not push to another branch or merge without authorization.
- Check compatibility against the target game's files and generated script
  documentation. Do not invent engine APIs or change gameplay or balance
  beyond the task's scope.
- For version updates, follow CONTRIBUTING.md's vanilla-update policy: establish
  each affected override's purpose, carry over compatible vanilla changes and
  document concrete evidence for exclusions. A full replacement or a vanilla
  balance change alone does not justify retaining old vanilla behavior.
- Treat external vanilla and Workshop sources as read-only. Do not modify their
  files or Git repositories. Run Git commands from an explicitly selected
  working directory, and keep experimental files outside those repositories.
- Avoid unsolicited restructuring or broad refactoring. A `kmpmp_` filename
  does not establish ownership of everything it contains.
- Deployment scripts mirror directories and may delete existing destination
  files. Verify the destination path and use disposable folders for testing.
  Do not run the branch-deletion utility as part of routine setup.
- Follow CONTRIBUTING.md's validation policy and review the final diff. Report
  what each check established and any material gaps.
- Follow CONTRIBUTING.md's source-comment convention: use `# kmpmp` for
  verified custom deviations, preserve inherited comments and distinguish
  `vanilla =` from `total =` when numerical context is known. Never guess
  historical source values or derived totals; report unresolved cases.
- Run the [effective-modifier validator](docs/DEVELOPMENT.md#effective-modifier-validation)
  for changes to modifier contributions, injected character trait weights,
  entry-mode conversions and vanilla updates.
  Investigate every new or changed `ERROR` and `REVIEW`. Correct the cause or
  document in the PR why the result is acceptable. Exit code 0 can still leave
  `REVIEW` findings open. Unchanged, pre-existing findings do not block independent work.
- Keep issue and PR descriptions focused on the current outcome. Update the
  summary rather than appending work logs. Useful intermediate findings and
  progress may be discussed in comments, in moderation. Follow the writing
  rules in CONTRIBUTING.md.
