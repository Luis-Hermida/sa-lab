Status: done
Summary: Moved tcp-server to the repo root as a standalone exercise, removed the NodeJS npm workspace,
moved .nvmrc to the root and updated README.md and CLAUDE.md (option 3 of architecture.md).

# Flat repo layout — build log

## T1 Move the exercise to the root
Files: `NodeJS/exercises/tcp-server/*` -> `tcp-server/*` (`git mv`)
Verify: `git status --short` shows `R` for all seven files. History check after commit: see T5.

## T2 Move .nvmrc, remove the workspace
Files: `NodeJS/.nvmrc` -> `.nvmrc`; deleted `NodeJS/package.json`, `NodeJS/package-lock.json`; removed the empty `NodeJS/` folder.
Verify: `ls NodeJS` -> no such file; `cat .nvmrc` -> `22`.

## T3 engines in tcp-server/package.json
Files: `tcp-server/package.json`
Verify: `cd tcp-server && npm start` -> `Listening Port 8080`; `curl http://localhost:8080/files` -> `200`. `npm run dev` also starts (`Listening Port 8080`). Node v22.23.5.

## T4 Docs
Files: `README.md` (exercise table, structure, usage), `CLAUDE.md` (Structure section). `tcp-server/README.md` had no paths to change.
Verify: `git grep -n -e NodeJS -e 'exercises/' -- ':!docs/work'` -> no matches (exit 1).

## T5 Commit
One commit with the whole move. Verify: see `git show --stat HEAD`.

## Result
- Built: flat layout, one standalone folder per exercise; nothing at the root ties exercises together.
- Verification: all task checks passed; there is no test suite in the repo.
- Review: no independent reviewer run; the diff is file moves plus docs, with no functional code.
- QA focus: on the Windows clone, after pulling, delete the leftover `NodeJS/` folder (untracked `node_modules`) by hand; check `nvm use` from inside `tcp-server/`.

## Decisions
- Skipped the reviewer subagent: the change has no functional code, only renames, two deleted config files and docs.
- Added an exercise table to README.md and a line in CLAUDE.md asking to keep it current, so the root stays an index as exercises grow.
