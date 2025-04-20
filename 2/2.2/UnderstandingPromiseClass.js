// VERY IMPORTANT: This is a simplified version of the Promise class.SAME MAIN FUNCTIONALITY
class Promise2{
    constructor(fn){
        this.fn=fn;
        this.fn(()=>{
            this.resolve();
        })
    }
    then(callback)
    {
        this.resolve=callback;
    }
}

function readTheFile(resolve){
    setTimeout(function(){
        console.log("callback setTimeout completed");
        resolve();
    },3000);
}

function setTimeoutPromisified(){
    return new Promise2(readTheFile);
}

let p=setTimeoutPromisified();
function callback(){
    console.log("callback has been called");
}
p.then(callback);