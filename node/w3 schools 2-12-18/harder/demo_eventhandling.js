var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('  ...I hear a scream for ice cream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);
console.log("Created event and waiting for a scream..")

// Emit scream function
function function1() {
    // all the stuff you want to happen after that pause
    eventEmitter.emit('scream');
}

// Wait and then emit scream
setTimeout(function1, 3000);