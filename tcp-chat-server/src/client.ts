import * as net from 'net';

const HOST = '127.0.0.1';
const PORT = 8080;

const client = new net.Socket();

client.connect(PORT, HOST, () => {
    console.log('Connected to server');
});

client.on('data', (data) => {
    console.log('Received: ' + data.toString().trim());
});

client.on('close', () => {
    console.log('Connection closed');
    process.exit(0); // Exit the process when the connection is closed
});

client.on('error', (err) => {
    console.error(`Connection error: ${err.message}`);
    process.exit(1); // Exit with an error code
});

// Handle user input
process.stdin.on('data', (input) => {
    const message = input.toString().trim();
    if (message.toLowerCase() === 'exit') {
        console.log('Disconnecting from server...');
        client.end(); // Gracefully close the connection
    } else {
        client.write(message);
    }
});

// Handle process exit (e.g., Ctrl+C)
process.on('SIGINT', () => {
    console.log('\nExiting...');
    client.end(); // Gracefully close the connection
    process.exit(0);
});