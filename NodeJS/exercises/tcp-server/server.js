// Exercise · TCP server
// Write your server here. See README.md for the task.

import net from 'node:net';

const server = net.createServer((socket) => {
    console.log(`New connection from: ${socket.remoteAddress}`);

    socket.on('data', (chunk) => {
        console.log(`Received: ${chunk}.`);

        socket.write([
            "HTTP/1.1 200 OK",
            "Content-Length: 5",
            "Content-Type: text/plain",
            "",
            "Hello",
        ].join("\r\n"))

        // socket.end(() => {
        //     console.log('Sent FIN packet.')
        // })
    });


    socket.on('error', (error) => {
        console.log(error);
    })
});


server.maxConnections = 50
setInterval(() => {
    server.getConnections((_error, count) => {
        console.log(`Open connections: ${count}`);
    })
}, 1000)
server.listen(8080, () => console.log("Listening Port 8080"));

