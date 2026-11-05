# AI coding agents

Read [CONTRIBUTING.md](CONTRIBUTING.md) first; it is the authoritative development
policy. These safeguards apply to automated work:

- Check Git status and the active branch before editing. Preserve unrelated
  tracked/untracked changes; do not reset, clean, stash or overwrite others' work.
- Follow the task's branch and PR instructions. Keep unrelated tasks separate;
  do not push to another branch or merge without authorization.
- Use actual target-build files and generated docs for compatibility evidence.
  Do not invent engine APIs or change gameplay/balance beyond the task's scope.
- Treat external vanilla and Workshop references as read-only, including their
  Git state. Run Git commands in an explicit working directory and keep
  experiments out of those repositories.
- Avoid unsolicited restructuring or broad refactoring. A `kmpmp_` filename
  does not establish ownership of everything it contains.
- Deployment mirrors folders: verify absolute destinations and use disposable
  folders for checks. Do not run the branch-deletion utility as routine setup.
- Review the final diff and report checks honestly. Parsing or headless loading
  is not campaign or multiplayer validation.
