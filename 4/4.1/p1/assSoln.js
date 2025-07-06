// this is the solution implemented by harkirat in video

// const fs =require('fs');

// function main(fileName){
//     console.log(process.argv);
//     fs.readFile(fileName,"utf-8",function(err,data){
//         let total =0;
//         for(let i=0;i<data.length;i++)
//         {
//             if(data[i]===" ")
//                 total++;
//         }
//         console.log(total+1);
//     })
// }
// main(process.argv[2]);


const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const words = data.split(' ').length;
        // console.log(data.split(' '));
        console.log(`There are ${words} words in ${file}`);
        
      }
    });
  });

program.parse();
// to get count
// node assSoln.js count /Users/aniketsaxena/Documents/p/p0/dump/webDev/100xdevCohort3/liveClasses/webdev/webdev100xdevNotes/4/4.1/p1/a.txt

//to get a help 
// node assSoln.js -h 