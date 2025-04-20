function setTimeoutPromisified(duration){
    return new Promise(function (resolve){
        setTimeout(resolve,duration);
    });
}

setTimeoutPromisified(1000).then(function(){
    console.log("hi");
    setTimeoutPromisified(3000).then(function(){
        console.log("hello");
        setTimeoutPromisified(5000).then(function(){
            console.log("hi There");
        });
    });
});
//it again look like a callback hell There are two way to solve it One define function outside and other if we want to keep using anonymouse function see following code

setTimeoutPromisified(1000).then(function(){
    console.log("hi");
    return setTimeoutPromisified(3000)}).then(function(){
        console.log("hello");
        return setTimeoutPromisified(5000)}).then(function(){
            console.log("hi There");
        });
 
        