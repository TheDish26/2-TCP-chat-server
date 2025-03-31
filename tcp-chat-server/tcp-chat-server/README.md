# TCP Chat Server

This project implements a simple TCP chat server and client using TypeScript. It allows multiple clients to connect to the server and exchange messages in real-time.

## Project Structure

```
tcp-chat-server
├── src
│   ├── server.ts        # Entry point for the TCP chat server
│   ├── client.ts        # Client-side logic for connecting to the server
│   └── utils
│       └── helpers.ts   # Utility functions for the server and client
├── package.json         # npm configuration file
├── tsconfig.json        # TypeScript configuration file
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd tcp-chat-server
   ```

2. Install the dependencies:

   ```
   npm install
   ```

### Running the Server

To start the TCP chat server, run the following command:

```
ts-node src/server.ts
```

### Running the Client

To connect a client to the server, run the following command in a separate terminal:

```
ts-node src/client.ts
```

### Usage

Once the server is running, you can open multiple client instances to connect to the server. Each client can send and receive messages.

### Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

### License

This project is licensed under the MIT License.