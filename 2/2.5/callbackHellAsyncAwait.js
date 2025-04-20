// https://projects.100xdevs.com/tracks/promises-async-await/Promises-and-async--await-7
function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    });
}

async function solve(){
    //seem like callback and promise not work?
    await setTimeoutPromisified(1000);// thread is not waiting here under the hood it is bunch promise
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("hello");
    await setTimeoutPromisified(5000);
    console.log("hi There");
}

solve();

//to check we have log outside the function if it is sequential it should wait
console.log("hi outside");