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

// without catch it will log undefined (that mean any console.log will work even if we go error)
readFileAsync('file.txt').then(function(data)
{
    console.log("File has been read");
    console.log(data);
});
