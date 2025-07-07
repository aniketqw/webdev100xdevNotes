const express =require('express');
const app=express();

//route handler 
// for / route GET method
app.get('/', (req, res) => {
  res.send('Hello World')
});

app.post('/',(req,res)=>{
    res.send("hello world from post endpoint of / route")
})

app.get('/asd', (req, res) => {
  res.send('Hello World from the asd endpoint')
});


app.listen(3000);//which port you want to use
