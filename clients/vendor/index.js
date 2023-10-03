const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000/caps');

// Connect to the 'caps' namespace
const capsNamespace = io.connect('http://localhost:3000/caps');

capsNamespace.on('connection', (socket) => {
  console.log('Vendor client connected to the "caps" namespace');
});

socket.on('connect', () => {
  console.log('Vendor client connected');
  socket.emit('join', 'One Piece'); // Join the room based on Vendor ID
  simulatePickup(socket);
});

socket.on('disconnect', () => {
  console.log('Vendor client disconnected');
});

socket.on('delivered', (payload) => {
  console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
});

function simulatePickup(socket) {
  setInterval(() => {
    const payload = {
      store: 'One Piece',
      orderId: '3D2Y',
      customer: 'Monkey D. Luffy',
      address: 'Marineford',
    };
    console.log(`Vendor: Simulating pickup of order ${payload.orderId}`);
    
    // Emit 'pickup' event to the CAPS server
    socket.emit('pickup', payload);
  }, 5000); // Emit 'pickup' every 5 seconds
}
