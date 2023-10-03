const http = require('http');
const io = require('socket.io');

const server = http.createServer();
const capsNamespace = io(server, { path: '/caps' });

// Handle connections and events in the 'caps' namespace
capsNamespace.on('connection', (socket) => {
    socket.on('pickup', (payload) => {
      socket.broadcast.emit('pickup', payload);
    });
  
    socket.on('join', (room) => {
      socket.join(room);
    });

    socket.on('delivered', (payload) => {
        console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
      });
      
  });

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
