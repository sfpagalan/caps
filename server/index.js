const http = require('http');
const io = require('socket.io');

const server = http.createServer();
const capsNamespace = io(server, { path: '/caps' });

const messageQueue = {
  pickup: [],
  delivered: [],
};

// Handle connections and events in the 'caps' namespace
capsNamespace.on('connection', (socket) => {
  socket.on('pickup', (payload) => {
    socket.broadcast.emit('pickup', payload);

    messageQueue.pickup.push(payload);
  });
  
    socket.on('join', (room) => {
      socket.join(room);
    });

    socket.on('delivered', (payload) => {
      console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);

      messageQueue.delivered.push(payload);
    });

    socket.on('received', (message) => {
      console.log('received', message);
    });

    socket.on('getAll', (query) => {
      if (query === 'pickup') {
        messageQueue.pickup.forEach((message) => {
          socket.emit('pickup', message);
        });
      } else if (query === 'delivered') {
        messageQueue.delivered.forEach((message) => {
          socket.emit('delivered', message);
        });
      } else {
        console.log('Invalid event');
      }
    });
      
  });

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
