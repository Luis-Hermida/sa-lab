// Exercise · TCP server
// Write your server here. See README.md for the task.

import net from 'node:net';

const server = net.createServer((socket) => {
    console.log(`New connection from: ${socket.remoteAddress}`);
    let buf = Buffer.alloc(0);
    let done = false;

    socket.on('data', (chunk) => {
        if (done) return;
        console.log(`Received: ${chunk.length}.`);

        buf = Buffer.concat([buf, chunk]);
        const end = buf.indexOf('\r\n\r\n');

        if (end !== -1) {
            done = true;
            const head = buf.subarray(0, end).toString('utf8');
            console.log(head)
            const body = 'ñ';

            socket.end([
                "HTTP/1.1 200 OK",
                `Content-Length: ${Buffer.byteLength(body)}`,
                "Content-Type: text/plain; charset=utf-8",
                "Connection: close",
                "",
                body,
            ].join("\r\n"))
        }
    });


    socket.on('end', () => console.log('server sent FIN'));
    socket.on('close', () => console.log('closed'));
    socket.on('error', (error) => console.log(error));
});

server.listen(8080, () => console.log("Listening Port 8080"));

