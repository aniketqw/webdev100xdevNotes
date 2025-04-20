function setTimoutPromisified(duration){
    return new Promise(function (resolve){
        setTimeout(resolve,duration);
    });
}