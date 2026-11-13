// Exercise · TCP server
// Write your server here. See README.md for the specs.

import net from 'node:net';

const MAX_HEADER = 1024; // bytes; small for testing (~16 KB in real use)

const STATUS = {
    OK: '200 OK',
    BAD_REQUEST: '400 Bad Request',
    TIMEOUT: '408 Request Timeout',
    TOO_LARGE: '431 Request Header Fields Too Large',
};

const server = net.createServer((socket) => {
    console.log(`New connection from: ${socket.remoteAddress}`);

    const reject = (status) => {
        if (done) { socket.destroy(); return; }
        done = true;
        socket.end([`HTTP/1.1 ${status}`, 'Content-Length: 0', 'Connection: close', '', ''].join('\r\n'));
        setTimeout(() => socket.destroy(), 2000);
    };

    const deadline = setTimeout(() => {
        reject(STATUS.TIMEOUT)
    }, 10000);

    let buf = Buffer.alloc(0);
    let done = false;

    socket.on('data', (chunk) => {
        if (done) return;
        console.log(`Received: ${chunk.length}.`);

        buf = Buffer.concat([buf, chunk]);
        const end = buf.indexOf('\r\n\r\n');

        // Checks header size to calculate bytes
        const headerSize = end === -1 ? buf.length : end;
        if (headerSize > MAX_HEADER) {
            reject(STATUS.TOO_LARGE);
            return;
        }

        // Checks buffer size to calculate bytes
        if (end === 1 && buf.length > MAX_HEADER) {
            reject(STATUS.TOO_LARGE);
        }

        if (end !== -1) {
            done = true;
            const head = buf.subarray(0, end).toString('utf8');
            console.log(head)
            const body = 'ñ';

            socket.end([
                `HTTP/1.1 ${STATUS.OK}`,
                `Content-Length: ${Buffer.byteLength(body)}`,
                "Content-Type: text/plain; charset=utf-8",
                "Connection: close",
                "",
                body,
            ].join("\r\n"))
        }
    });

    socket.setTimeout(5000);
    socket.on('timeout', () => {
        reject(STATUS.TIMEOUT)
    })

    socket.on('end', () => console.log('client sent FIN'));

    socket.on('close', () => {
        console.log('closed');
        clearTimeout(deadline)
    });

    socket.on('error', (error) => console.log(error));

});

server.maxConnections = 10
server.listen(8080, () => console.log("Listening Port 8080"));

