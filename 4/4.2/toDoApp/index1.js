const express=require ('express');
const app=express();

app.use(express.json());
let todos=[];

//add to do 
app.post('/',(req,res)=>{
const taskName=req.body.task;
const idName=Date.now();

todos.push({
    id:idName,
    title:taskName

})
console.log(todos);

res.send(taskName+" has been added with id: "+idName);
});

//remove a todo
app.delete('/',(req,res)=>{
const id=req.body.id;// extract id from the request body given by user
const todoName=todos.find(items=>items.id===id)?.title;// extract name of the todo name with the given id
const updatedTodo=todos.filter(items=>items.id!==id);//remove the todo with given id 
console.log(updatedTodo);
todos=updatedTodo;
if(todoName===undefined)
    res.send(" Todo id is incorrect");
else
res.send(todoName+" has been deleted");


});

// update a todo 
app.put('/',(req,res)=>{

});

// show all todo 
app.get('/',(req,res)=>{
    let s=`use id to delete todo\n`;
    for(let i=0;i<todos.length;i++)
        s+=`todo id ${todos[i].id} name: ${todos[i].title} \n`;
    res.send(s);

})

app.listen(3000);