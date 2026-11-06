# CLAUDE.md

## Language

Everything in this repo is written in **English**: code, comments, READMEs, commit messages, docs and notes. Reply to me in chat in whatever language I use, but anything you write into a file or a commit is English.

## What this repo is

Short fundamentals exercises (networking, concurrency, I/O, data) for my Solutions Architect program. The main project is Forge, in its own repo; anything that belongs to Forge goes there, not here.

## Structure

One top-level folder per language/runtime, each with its own tooling:

```
NodeJS/
  exercises/
    tcp-server/   Hand-written HTTP over raw TCP
```

- `NodeJS/` is an npm workspaces root (Node 22, see `.nvmrc`). Run npm commands from inside `NodeJS/`.
- Each exercise folder has its own `README.md`: problem statement, how to run it, and my reasoning answers at the end.

## Rules for Claude

- Exercises marked **no AI** are written by me. Do not write, complete or hint the solution in code unless I explicitly ask. You may review after I finish.
- When reviewing, ask me questions first (what breaks, why) before giving the answer.
- Don't add dependencies to an exercise without asking; the point is to use the standard library.
