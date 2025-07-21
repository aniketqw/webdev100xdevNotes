const express=require('express');
const app=express();

//or app.get('/sum',function(req,res){});
let requestCount=0;
function requestIncreaser(req,res)
{
    requestCount+=1;
    console.log("total number of request count = "+requestCount);
    req.requestCount=requestCount;
    //close to middleware (we have kind of created our own middleware as we have this function access to req object )
}
app.get('/sum',(req,res)=>{
    requestIncreaser(req,res);

    //main logic
    let a=parseInt(req.query.a);
    let b=parseInt(req.query.b);

    res.json({
        answer:a+b,
        requestCount:requestCount

    });


});

app.listen(3000);