let ctr=1;
function addToDo(){
    const inputF=document.querySelector('input');//give the name of the tag
    // console.log(inputF.value);
    
    const divel=document.createElement("div");
    divel.setAttribute('id',ctr);
    divel.innerHTML="<div>"+inputF.value+"<button onclick='deleteToDo("+ctr+")'>Delete</button> "+"</div>";
    ctr+=1;

    const parentEl=document.querySelector("body");
    parentEl.appendChild(divel);

}
function deleteToDo(index){
    const element=document.getElementById(index);
    element.parentNode.removeChild(el);

}