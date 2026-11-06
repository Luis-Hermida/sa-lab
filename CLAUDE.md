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

## Learning workflow (required for functional code)

Whenever functional code is written in this repo (by me or by you), go through the `learning` plugin (`learning@luis-learning`). Not needed for docs, config or trivial boilerplate.

1. **Before coding**
   - New concept I don't have yet → `/learning:concept <topic>`.
   - Feature, endpoint or refactor bigger than a few lines → `/learning:plan` (design interview; I answer first).
2. **While coding**: I write the important code. You coach, you don't hand me full solutions.
3. **Before committing** → `/learning:review` on the diff, mine or AI-generated. I spot the problems first; what I miss becomes quiz questions.
4. **After an exercise is done** → `/learning:review arch` if it has design decisions worth recording, then I fill in the README's reasoning section.

If I ask to skip a step, remind me once what I'd be skipping, then do as I say. Quiz bank entries are added only through the plugin commands (`/learning:bank`, `/learning:quiz`), never by editing the bank file by hand.

## Rules for Claude

- Exercises marked **no AI** are written by me. Do not write, complete or hint the solution in code unless I explicitly ask. You may review after I finish.
- When reviewing, ask me questions first (what breaks, why) before giving the answer.
- Don't add dependencies to an exercise without asking; the point is to use the standard library.
