
function waitFor3s(resolve){
    setTimeout(resolve,3000);
}

function setTimeoutPromisified(ms){
    return new Promise(waitFor3s);//function whose first argument is resolve 
    // when that function gets called we will call the function passed in .then() method
}

function main(){
    console.log("main is called after 3 seconds");
}
setTimeoutPromisified().then(main); // This will call the main function after 3 seconds