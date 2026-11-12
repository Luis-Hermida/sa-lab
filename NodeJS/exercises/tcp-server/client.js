import net from 'node:net';

const socket = net.connect(8080, 'localhost', () => {
    console.log('Client connected to server')
    console.log(Buffer.from('ñ'));

    socket.write("GET /?q=")
    socket.write(Buffer.from([0xc3]))
    setTimeout(() => {
        socket.write(Buffer.from([0xb1]))
        socket.write([
            " HTTP/1.1",
            "Host: localhost",
            "",
            "",
        ].join("\r\n"))
    }, 100)

    socket.on('data', (chunk) => {
        console.log(`Recieved: ${chunk}.`);
    });
})