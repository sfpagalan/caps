// 'use strict';

// const eventPool = require('../../eventPool');
// const Chance = require('chance');
// const chance = new Chance();

// function simulatePickup(storeName) {
//   const payload = {
//     store: storeName,
//     orderId: chance.guid(),
//     customer: chance.name(),
//     address: chance.city() + ', ' + chance.state(),
//   };
//   eventPool.emit('pickup', payload);
// }

// eventPool.on('delivered', (payload) => {
//   console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
// });

// module.exports = { simulatePickup };

'use strict';

function handleDelivered(payload) {
  console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
}

module.exports = {
  handleDelivered,
};
