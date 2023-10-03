'use strict';

const eventPool = require('./hub');

eventPool.on('pickup', (oayload) => {
    const timestamp = new Date().toISOString();
    console.log('EVENT:', {
        event: 'pickup',
        time: timestamp,
        payload,
    });
});
