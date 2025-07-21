const express=require("express");
const app=express();

// for /add/10/20 10+20 =30 
app.get('/add/:a/:b',function(req,res){
   const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    // const result;
    res.json({
        answer: a+b
    });

})


app.get('/multiply',function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    // const result;
    res.json({
        answer: a*b
    });
    
})

app.listen(3000);