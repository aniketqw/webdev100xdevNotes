const express=require('express');
const app=express();

//or app.get('/sum',function(req,res){});
let requestCount=0;
function requestIncreaser(req,res,next)
{
    requestCount+=1;
    console.log("total number of request count = "+requestCount);
    req.requestCount=requestCount;
    next();//as we call next we are going to call the next function (which is in our case main logic of code)
    //if we don't write next the next function will not be called
}
//adding the function(requestIncreaser) directly after route is how we write middleware if we want to add other middleware we can also add after , ( thus the main logic code is also middleware)
app.get('/sum',requestIncreaser,function(req,res){

    //main logic
    let a=parseInt(req.query.a);
    let b=parseInt(req.query.b);

    res.json({
        answer:a+b,
        requestCount:requestCount

    });


});

app.listen(3000);