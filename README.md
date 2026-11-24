# sa-lab

Short fundamentals exercises (networking, concurrency, I/O, data) that go with my program to become a Solutions Architect. The main project lives in [Forge](https://github.com/luis-hermida/forge); this repo holds the standalone exercises that are not part of Forge.

## Exercises

| Exercise | Language | What it is |
| --- | --- | --- |
| [tcp-server](tcp-server/) | Node.js | Hand-written HTTP server over TCP |

## Structure

One folder per exercise at the root. Each exercise is standalone: its own `README.md` (problem statement and how to run it) and its own tooling (`package.json` for Node, a build file for other languages). There is no shared workspace.

The root `.nvmrc` pins Node 22 for every Node exercise (`nvm use` looks in parent folders). An exercise that needs another version adds its own `.nvmrc`.

## Usage

```bash
cd tcp-server
nvm use            # Node 22
npm start
```
