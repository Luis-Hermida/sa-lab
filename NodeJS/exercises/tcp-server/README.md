# TCP server · no AI

Week 1, Tuesday 3. **No AI**: I write it; AI only reviews at the end.

## Concept

An HTTP response is just text over TCP: status line, headers, blank line, body. `Content-Length` tells the client how many bytes to expect, and lines end with `\r\n`.

## Task

Using Node's `net` module, write a server that:

1. Listens on port 8080.
2. Logs to the console whatever arrives on each connection.
3. Replies with a valid, hand-written HTTP response.

Hints: `net.createServer(socket => { ... })`, `socket.on('data', ...)`, `socket.write(...)`, `socket.end()`.

## How to test it

```bash
npm run dev                          # restarts on save
curl -v http://localhost:8080/files  # in another terminal
```

Then open it in the browser: `http://localhost:8080/files`.

## Reasoning (my answers)

1. Which headers does the browser send that `curl` doesn't?
   >
2. What happens if `Content-Length` is smaller than the body?
   >
3. And if it's larger?
   >

## Friday 6 · Extension

Add a 5 s `setTimeout` before replying and fire two `curl`s at once. Then replace it with a `while` loop that keeps the CPU busy for 5 s. Write down what changes and why.

>
