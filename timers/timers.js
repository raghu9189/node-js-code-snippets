// learn about timers module

const { setImmediate, setInterval, setTimeout, clearImmediate, clearTimeout, clearInterval } = require("timers");

// setTimeout
const removeTimeout = setTimeout(function(user){
    console.log(user);
}, 2000, "Raghu");

// clearTimeout(removeTimeout)

// setImmediate
const removeSetImmediate = setImmediate(function(user){
    console.log("this will be executed immediately "+user);
}, "Raghu")

// clearImmediate(removeSetImmediate)
let countInterval = 0;
const removeInterval = setInterval(function(user){
    console.log(`Hello my dear ${user}`)
    countInterval++;
    if (countInterval >= 10) clearInterval(removeInterval);
}, 1000, "Raghu")

setTimeout(function(message){
    console.log(message);
}, 2000, ["UNEXPECTED EXECUTION", "Arg2"]); // args array


// nextTick()
process.nextTick(function(user){console.log("Next Tick "+user)}, "Raghu");
