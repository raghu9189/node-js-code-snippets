// creating a new Promise
let myPromise = new Promise((onResolve, onRejected)=>{
    // simulating an operation that determines success or failure
    
    // Handle success or failure
    let success = true;
    if(success){
        onResolve("Operation was successful"); // Resolve the promise on success
    }else{
        onRejected("Something was wrong") // Reject the promise on failure
    }
});

// Consuming the promise using .then
myPromise.then((value)=>{console.log(value);
}).catch((error)=>{console.log(error);
})