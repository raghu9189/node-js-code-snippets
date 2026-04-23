const NewEventEmitter = require("events");
const myEmitter = new NewEventEmitter();

const callMe = function(user){
    console.log(`Hello ${user}`);
}

// myEmitter.once('callMe', callMe);
myEmitter.on('callMe', callMe);

myEmitter.emit('callMe', "Raghu 1");
myEmitter.emit('callMe', "Raghu 2");
myEmitter.emit('callMe', "Raghu 3");
myEmitter.emit('callMe', "Raghu 4");
myEmitter.off('callMe', callMe);
myEmitter.emit('callMe', "Raghu 5");
myEmitter.emit('callMe', "Raghu 6");
