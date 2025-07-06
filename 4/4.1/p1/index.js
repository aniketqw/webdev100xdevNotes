// const path =require('path');
// console.log(__dirname);
// console.log(__dirname+"/index.js");
// console.log(path.join(__dirname,"/../../index.js"));//it resolve ../ and give path in the simplest form
// console.log(path.join(__dirname,"../../index.js"))//incorrect requries /../../index.js but path lib handles its



//assignment 1 MY soln  https://projects.100xdevs.com/tracks/js-runtim/Node-js-Runtime-8

const { program } = require('commander');
const fs=require('fs')
program
  .argument('<string>');

program.parse();

// console.log(program.args);

const path = program.args[0];
// console.log(path);

fs.readFile(path,"utf-8",print)
function print(err,data){
    // console.log(data);
    let count=0;
    for(let i=0;i<data.length;i++)
    {
        
        if(data[i]==" ")
            count++;
        // console.log(data[i]+ 'count'+ count);
    }
    count++;
    console.log("You have "+ count+" words in this file");
        

}
