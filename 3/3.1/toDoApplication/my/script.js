function addToDo(){
    const inputF=document.querySelector('input');//give the name of the tag
    console.log(inputF.value);
    
    const divel=document.createElement("div");
    divel.innerHTML=inputF.value;
    const buttonEl=document.createElement("button");
    buttonEl.innerHTML="Done";
    buttonEl.onclick=function(){
        divel.remove();
    }
    divel.appendChild(buttonEl);
    
    const parentEl=document.querySelector("body");
    parentEl.appendChild(divel);

}