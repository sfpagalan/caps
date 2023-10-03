const { Server } = require('socket.io');
const http = require('http');

const createSocketServer = (port) => {
  const server = http.createServer();
  const io = new Server(server, {
    cors: {
      origin: '*',
    },
  });

  io.on('connection', (socket) => {
    console.log('Socket.io connection established');
  });

  server.listen(port, () => {
    console.log(`Socket.io server is running on port ${port}`);
  });

  return io;
};

module.exports = createSocketServer;
