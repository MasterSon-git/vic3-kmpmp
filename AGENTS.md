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
- Review the final diff and report checks honestly. Parsing or headless loading
  is not campaign or multiplayer validation.
- Keep issue and PR descriptions focused on the current outcome. Update the
  summary rather than appending work logs. Useful intermediate findings and
  progress may be discussed in comments, in moderation. Follow the writing
  rules in CONTRIBUTING.md.
