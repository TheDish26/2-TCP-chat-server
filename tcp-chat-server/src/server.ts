import * as net from 'net';

const HOST = '127.0.0.1';
const PORT = 8080;

const clients: net.Socket[] = [];

const server = net.createServer((socket) => {
    console.log('New client connected');

    // Add the new client to the list
    clients.push(socket);

    // Broadcast messages to all clients
    socket.on('data', (data) => {
        const message = data.toString().trim();
        console.log(`Received: ${message}`);

        // Send the message to all other clients
        clients.forEach((client) => {
            if (client !== socket && !client.destroyed) {
                try {
                    client.write(message);
                } catch (err) {
                    if (err instanceof Error) {
                        console.error(`Failed to send message to a client: ${err.message}`);
                    } else {
                        console.error('Failed to send message to a client: Unknown error');
                    }
                }
            }
        });
    });

    // Handle client disconnection
    socket.on('close', () => {
        console.log('Client disconnected');
        const index = clients.indexOf(socket);
        if (index !== -1) {
            clients.splice(index, 1);
        }
    });

    // Handle socket errors
    socket.on('error', (err) => {
        console.error(`Socket error: ${err.message}`);
    });
});

// Handle server-level errors
server.on('error', (err) => {
    console.error(`Server error: ${err.message}`);
});

// Start the server
server.listen(PORT, HOST, () => {
    console.log(`Server running at ${HOST}:${PORT}`);
});