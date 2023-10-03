'use strict';

const EventEmitter = require('events');

class EventPool extends EventEmitter {}

module.exports = new EventPool();
