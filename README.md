# sa-lab

Short fundamentals exercises (networking, concurrency, I/O, data) that go with my program to become a Solutions Architect. The main project lives in [Forge](https://github.com/luis-hermida/forge); this repo holds the standalone exercises that are not part of Forge.

## Structure

```
NodeJS/
  exercises/
    tcp-server/   Hand-written HTTP server over TCP
```

One top-level folder per language/runtime. Each exercise has its own `README.md` (problem statement and how to run it).

## Rules

- Exercises marked **no AI** are written by me. AI only reviews afterwards.
- Only code and problem statements live here. Personal notes and answers stay out of the repo.

## Usage

```bash
cd NodeJS
nvm use            # Node 22
npm run start -w exercises/tcp-server
```
