import * as net from 'net';

const HOST = '127.0.0.1';
const PORT = 8080;

const client = new net.Socket();

client.connect(PORT, HOST, () => {
    console.log('Connected to server');
});

client.on('data', (data) => {
    console.log('Received: ' + data);
});

client.on('close', () => {
    console.log('Connection closed');
});

process.stdin.on('data', (input) => {
    const message = input.toString().trim();
    client.write(message);
});