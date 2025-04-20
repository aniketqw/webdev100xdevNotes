const fs=require('fs');
function readFileAsync(file)
{
    return new Promise(function(resolve)
    {
        fs.readFile(file,'utf-8',function(err,data)
        {
            resolve(data);
        });
    });
};
readFileAsync('file.txt').then(function(data)
{
    console.log(data);
});