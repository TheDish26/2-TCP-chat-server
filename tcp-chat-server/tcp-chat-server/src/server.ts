import * as net from 'net';

const PORT = 3000;
const clients: net.Socket[] = [];

const server = net.createServer((client) => {
    clients.push(client);
    console.log('New client connected');

    client.on('data', (data) => {
        console.log(`Received: ${data}`);
        clients.forEach((c) => {
            if (c !== client) {
                c.write(data);
            }
        });
    });

    client.on('end', () => {
        console.log('Client disconnected');
        clients.splice(clients.indexOf(client), 1);
    });

    client.on('error', (err) => {
        console.error(`Client error: ${err}`);
    });
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});