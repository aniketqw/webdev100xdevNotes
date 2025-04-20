// const fs = require("fs");
// function print(err,data){
//     if(err){
//         return 0;
//     }
//     console.log(data);
//     return 1;
// }
// function readFile(fileName){
//     const result=fs.readFile(fileName,"utf-8",print);
//     console.log(result);
//     return result;
// }


// function random(resolve){//resolve is also a function 
//        const result=readFile("v.txt");
//        if(result==1)
//          resolve();
//     }
    
//     let p =new Promise(random);//suppose to return something eventually 
//     //has to describe wHEN DOES THE PROMISE GET RESOLVED 
//     //FOR THAT WE HAVE A RESOLVE FUNCTION INSIDE THE RANDOM function so when the 
//     //RESOLVE function is called the promise is resolved and calls the function passed in .then() method
    
    
    
    
    
    
//     // USING the eventual value return by the promise
//     function callback(){
//         console.log("Promise is succeded");
//     }
//     p.then(callback); // when the promise is completed ,then it will call the callback function

// YOUR TRY AFTER DIRECTION
// const fs=require("fs");
// function print(err,data){
//     console.log(data);
//     return err;
// }
// function readFile(fileName){
//     const contents=fs.readFile(fileName,"utf-8",print);
//     console.log(contents);
//     if(contents!=null)
//         return new Promise(resolve => resolve(contents));
// }
// readFile("a.txt").then(function(){
//     console.log("File read successfully");
// });



// ACTUAL SOLUTION 


const fs=require("fs");
//CREATING A PROMISE
function readTheFile(sendTheFinalValueHere){// sendTheFinalValueHere is actually callback function (implementaiton of the promise class)
    fs.readFile("a.txt","utf-8",function(err,data){
        if(err){
            sendTheFinalValueHere(err);
            return;
        }
        sendTheFinalValueHere(data);
    });
}
function readFile(fileName){
    return new Promise(readTheFile);
}


// USING PROMISE
const p =readFile();


function callback(contents){
    console.log(contents);

}
p.then(callback);