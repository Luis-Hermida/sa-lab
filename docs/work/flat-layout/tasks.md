Status: done
Summary: Move tcp-server to the repo root as a standalone exercise, remove the NodeJS workspace,
and update README and CLAUDE.md. Implements Option 3 of architecture.md.

# Flat repo layout — tasks

- [x] T1 Move the exercise to the root with history: `git mv NodeJS/exercises/tcp-server tcp-server`
  Files: `tcp-server/**`
  Verify: `git status` shows renames (R), not deletes plus adds; `git log --follow --oneline tcp-server/server.js` lists the old commits.

- [x] T2 Move `.nvmrc` to the root and remove the workspace: `git mv NodeJS/.nvmrc .nvmrc`, `git rm NodeJS/package.json NodeJS/package-lock.json`
  Files: `.nvmrc`, `NodeJS/`
  Verify: `ls NodeJS` fails (folder gone); `cat .nvmrc` prints `22`.
  Depends on: T1

- [x] T3 Add `"engines": { "node": ">=22" }` to `tcp-server/package.json`
  Files: `tcp-server/package.json`
  Verify: `cd tcp-server && npm start` starts the server; stop it with Ctrl+C. `node -e "JSON.parse(require('fs').readFileSync('tcp-server/package.json'))"` exits 0.
  Depends on: T1

- [x] T4 Update the root README (structure block becomes an exercise index; usage becomes `cd tcp-server && nvm use && npm start`), the "Structure" section of CLAUDE.md, and any path in `tcp-server/README.md`
  Files: `README.md`, `CLAUDE.md`, `tcp-server/README.md`
  Verify: `git grep -n -e NodeJS -e 'exercises/'` returns nothing outside `docs/work/`.
  Depends on: T1, T2

- [x] T5 Commit as one change: "Flatten repo: one standalone folder per exercise"
  Verify: `git show --stat HEAD` shows renames for the tcp-server files and the removal of the two NodeJS files.
  Depends on: T1–T4

No UI work, so no `/work:design`.

## QA focus
- `npm start` and `npm run dev` work from inside `tcp-server/` on Node 22.
- `nvm use` from inside `tcp-server/` picks up the root `.nvmrc` (Linux/macOS nvm).
- No doc still points at `NodeJS/` or `exercises/`.
- On the Windows clone after pulling: the leftover `NodeJS/node_modules` folder is the only thing left to delete by hand.

## Decisions
- One commit for the whole move: a half-moved repo has broken docs.
- `git mv` rather than copy and delete: keeps `git log --follow` working.
