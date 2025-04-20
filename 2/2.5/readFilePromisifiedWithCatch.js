
const fs=require('fs');
function readFileAsync(file){
    return new Promise(function(resolve,reject){
        fs.readFile(file,'utf-8',function(err,data){//basically whatever we write inside resolve and reject will be delivered to the data field of anonymous function (see line 20) inside then function
            if(err){
                //reject the promise
                reject("File not found");
            }
            else{
                //resolve the promise
                resolve(data);
            }
        });
    });
};


//catching the error without catch it will log undefined (that mean any console.log will work even if we go error)
readFileAsync('files.txt').then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err)
});