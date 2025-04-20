const fs=require("fs")

function print(err,data){
    console.log(data);
}

const contents=fs.readFile("./a.txt","utf-8",print);
// console.log(contents);

const contents1=fs.readFile("b.txt","utf-8",print);
// console.log(contents1);

console.log("Done!");