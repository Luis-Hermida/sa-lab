Status: draft
Summary: Three ways to flatten sa-lab, which today nests every exercise three levels deep
(`NodeJS/exercises/tcp-server/`). Recommended: one folder per exercise at the repo root,
each one standalone, with no npm workspace.

# Flat repo layout — architecture

## Requirements and assumptions
- Goal: a flatter layout that is quicker to navigate and to type (`cd tcp-server`, not `cd NodeJS/exercises/tcp-server`).
- Users: one person (the repo owner), on Windows locally and Linux in cloud sessions.
- Functional: every exercise keeps its README and its `npm` scripts; Node 22 stays pinned.
- Non-functional: zero dependencies per exercise (CLAUDE.md: "the point is to use the standard library"),
  so shared tooling buys very little. Adding an exercise should take one folder and nothing else.
- Assumptions (defaults, see Open questions): more languages will come (Java at least, given Forge);
  git history of the moved files should be kept (`git mv`).

## Current state
- `NodeJS/package.json` is an npm workspaces root with `"workspaces": ["exercises/*"]`.
- `NodeJS/package-lock.json` only records the workspace link to `tcp-server`; there are no dependencies.
- `NodeJS/.nvmrc` pins Node 22.
- `NodeJS/exercises/tcp-server/` has its own `package.json` (`start`, `dev` scripts), `jsconfig.json`, README and code.
- `README.md` and `CLAUDE.md` both describe the `NodeJS/exercises/` structure and must change with it.

So today two of the three levels (`NodeJS/`, `exercises/`) exist only to host the workspace,
and the workspace has nothing to share.

## Options considered

### Option 1 — drop `exercises/` (`node/tcp-server/`)
Keep one folder per language, put exercises straight under it, keep the workspace.
- Cost: smallest change (one `git mv`, workspace glob becomes `"*"` minus nothing, docs edit).
- Good: languages stay grouped; the layout scales to many languages without clutter at the root.
- Bad: still two levels; you still run npm from inside `node/`. Only half of what you asked for.

### Option 2 — flat exercises, root npm workspace
Every exercise at the root (`tcp-server/`), with `package.json`, `package-lock.json` and `.nvmrc`
at the root listing Node exercises explicitly (`"workspaces": ["tcp-server"]`).
- Cost: small move, plus keeping the workspace list current by hand (a glob like `*` would also match Java folders).
- Good: one level; `npm run start -w tcp-server` works from the root.
- Bad: the root becomes a Node project even when Java exercises arrive; a list to maintain for no shared dependency.

### Option 3 — flat exercises, each one standalone (recommended)
Every exercise at the root, self-contained: its own `package.json` (or `pom.xml` later), README and code.
No root `package.json`, no lock file. A root `.nvmrc` stays, because `nvm use` searches parent folders.
- Cost: smallest ongoing cost; removes two files. Run with `cd tcp-server && npm start`.
- Good: one level; the language is a property of the folder, not a parent folder; a Java exercise is just
  another folder with its own build file; adding an exercise is "create a folder".
- Bad: no single command to run every exercise; if exercises ever share code or dependencies, a workspace
  would have to come back. With 15+ exercises the root listing gets long (mitigation below).

## Decision
Option 3. The workspace is the only reason for the extra levels, and it shares nothing: zero dependencies
by rule, and the lock file is just a self-link. Option 2 gets the same flatness but keeps that ceremony and
ties the root to Node. Option 1 is the safe middle but only removes one of the two levels you dislike.

Target layout:

```
sa-lab/
  README.md          index of exercises (name, language, one line)
  CLAUDE.md
  .nvmrc             22 (nvm finds it from any subfolder)
  .editorconfig
  .gitignore
  .gitattributes
  tcp-server/
    README.md
    package.json
    jsconfig.json
    server.js  server-fixed.js  client.js  flood.js
  docs/work/...      planning docs (this file)
```

## Risks, failure modes and scale
- Broken commands in docs: README and CLAUDE.md mention `NodeJS/` and `-w exercises/tcp-server`. Detected by
  grepping for `NodeJS` and `exercises/` after the move (T4 verify).
- Windows local clone: after pulling, the old `NodeJS/` folder may linger with an untracked `node_modules/`.
  Delete it by hand; git will not.
- `nvm-windows` does not read `.nvmrc` the way nvm does. Same as today, so no regression; `engines` in each
  exercise's `package.json` documents the version.
- Scale: at ~15+ exercises the root gets noisy. Revisit then: a language prefix (`node-tcp-server/`) keeps
  it flat and sortable; a topic folder (`networking/`) would add a level back.
- History: `git mv` keeps it; `git log --follow tcp-server/server.js` shows the old commits.

## Decisions
- One folder per exercise at the root: the language/`exercises` levels only hosted an npm workspace with nothing to share.
- No npm workspace and no lock file: exercises have zero dependencies by rule.
- Keep `.nvmrc` at the root: nvm searches parent folders, so one pin covers every Node exercise.
- Add `"engines": {"node": ">=22"}` to each exercise's `package.json`: the version lives with the exercise once the root `package.json` is gone.
- No numeric or language prefixes yet: revisit at ~15 exercises.

## Open questions
1. Will there be non-Node exercises (Java, Python)? Default: yes. If never, Option 2 becomes as good as 3.
2. Do you want one command that runs every exercise from the root? Default: no. If yes, Option 2.
3. Prefix names with a language or number (`node-tcp-server`, `01-tcp-server`)? Default: no, until ~15 exercises.
