// 'use strict';

// const eventPool = require('../../eventPool');

// eventPool.on('pickup', (payload) => {
//     console.log('DRIVER: PICKED UP ${payload.orderId}');
// });

// module.exports = {};
'use strict';

function handlePickup(payload, socket) {
    console.log(`DRIVER: picked up ${payload.orderId}`);
    
    // Simulate in-transit and delivered events
    simulateInTransit(payload, socket);
    setTimeout(() => simulateDelivered(payload, socket), 3000); // Simulate delivery after 3 seconds
  }
  
  function simulateInTransit(payload, socket) {
    console.log(`DRIVER: in-transit ${payload.orderId}`);
    // Emit 'in-transit' event to the CAPS server
    socket.emit('in-transit', payload);
  }
  
  function simulateDelivered(payload, socket) {
    console.log(`DRIVER: delivered ${payload.orderId}`);
    // Emit 'delivered' event to the CAPS server
    socket.emit('delivered', payload);
  }
  
  module.exports = {
    handlePickup,
  };
  