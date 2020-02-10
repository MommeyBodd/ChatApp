const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3030 });

server.on('connection', (ws) => {
  server.on('message', (message) => {
    server.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

console.log(`Server listening port: 3030`);