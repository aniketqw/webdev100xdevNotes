function timeout(){
    console.log("timeout");
}

console.log("Hi");

setTimeout(timeout,2000);//callbacks timeout function after 2 seconds

let c=0;
for(let i=0;i<1000000000;i++){
    c++;
}
console.log("Expensive operation done");

// setTimeout(timeout,2000) IS COMPLETED AND PUSHED TO THE CALLBACK QUEUE AND NOW WHETHER IT WILL BE EXECUTED OR NOT DEPENDS ON THE THREAD AVAILABILITY
// basically the timeout function is called after 2 seconds and the expensive operation is done before that BECAUSE CPU INTENSIVE TASK FINISHED FIRST