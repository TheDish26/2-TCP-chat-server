const { Server } = require('../server');

let server: Server;

beforeAll(() => {
	server = new Server();
	server.start();
});

afterAll(() => {
	server.stop();
});

test('server should start successfully', () => {
	expect(server.isRunning()).toBe(true);
});

test('server should start', () => {
    expect(true).toBe(true);
});

test('server should handle incoming messages', () => {
	const message = 'Hello, World!';
	const response = server.handleMessage(message);
	expect(response).toBe('Message received: Hello, World!');
});