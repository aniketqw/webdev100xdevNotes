
function random(resolve){//resolve is also a function 
resolve();
}

let p =new Promise(random);//suppose to return something eventually 
//has to describe wHEN DOES THE PROMISE GET RESOLVED 
//FOR THAT WE HAVE A RESOLVE FUNCTION INSIDE THE RANDOM function so when the 
//RESOLVE function is called the promise is resolved and calls the function passed in .then() method






// USING the eventual value return by the promise
function callback(){
    console.log("Promise is succeded");
}
p.then(callback); // when the promise is completed ,then it will call the callback function