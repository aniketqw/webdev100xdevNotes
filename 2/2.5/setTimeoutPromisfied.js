function setTimeoutPromisfied(duration){
    return new Promise(function (resolve){
        setTimeout(resolve,duration);
    });
}

function callback(){
    console.log("1 second has passed");
}

setTimeoutPromisfied(1000).then(callback);