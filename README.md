# sa-lab

Short fundamentals exercises (networking, concurrency, I/O, data) that go with my program to become a Solutions Architect. The main project lives in [Forge](https://github.com/luis-hermida/forge); this repo holds the standalone exercises that are not part of Forge.

## Structure

```
NodeJS/
  exercises/
    tcp-server/   Hand-written HTTP server over TCP (week 1)
```

One top-level folder per language/runtime. Each exercise has its own `README.md` (problem statement, how to run it, reasoning notes).

## Rules

- Exercises marked **no AI** are written by me. AI only reviews afterwards.
- Every exercise README ends with my reasoning answers: what I learned, what breaks and why.

## Usage

```bash
cd NodeJS
nvm use            # Node 22
npm run start -w exercises/tcp-server
```
