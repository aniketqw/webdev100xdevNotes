// Promise class give you promise that it will give you something in future 

// setTimeout call some function after some time for example seTimeout(logname,3000) calls a logname function after 3 seconds 
// PROMISES ARE A claner WAY TO DO THIS

// Using promises

//return an object of the promise class
function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

function callback(){
    console.log("3 second has passed");
}

setTimeoutPromisified(3000).then(callback); // This will call the callback function after 3 seconds

// let p =setTimeoutPromisified(3000);
// console.log(p); // This will return a instance of  a promise object