const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000/caps');

// connect to the caps namespace
const capsNamespace = io.connect('http://localhost:3000/caps');

capsNamespace.on('connection', (socket) => {
  console.log('Driver client connected to the "caps" namespace');
});

socket.on('pickup', (payload) => {
  console.log(`DRIVER: picked up ${payload.orderId}`);
  
  // simulate in-transit and delivered events
  simulateInTransit(payload);
  setTimeout(() => simulateDelivered(payload), 3000); // Simulate delivery after 3 seconds
});

function simulateInTransit(payload) {
  console.log(`DRIVER: in-transit ${payload.orderId}`);
  // Emit 'in-transit' event to the CAPS server
  capsNamespace.emit('in-transit', payload);
}

function simulateDelivered(payload) {
  console.log(`DRIVER: delivered ${payload.orderId}`);
  // Emit 'delivered' event to the CAPS server
  capsNamespace.emit('delivered', payload);
}

// handle disconnection events
socket.on('disconnect', () => {
  console.log('Driver client disconnected');
});
