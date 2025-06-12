const EventEmitter = require('events');


// create a instance of EventEmitter 
const eventEmitter = new EventEmitter();

// Define an event and its handler
eventEmitter.on('greet', (name)=>{
    console.log(`Hello ${name}`);
})

// emit the greet event
eventEmitter.emit('greet', 'Raghu')