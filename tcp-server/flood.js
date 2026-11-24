import net from 'node:net';

for (let i = 0; i <= 100; i++) {
const socket = net.connect(8080, 'localhost', () => {
    console.log('Client connected to server')
})
}
