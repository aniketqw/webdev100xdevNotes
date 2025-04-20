let ctr=0;
function callBack(){
    document.querySelectorAll("h2")[1].innerHTML=ctr;
    // console.log(ctr);
    ctr+=1;
}
setInterval(callBack, 1000);//I want to call the callback function every 1 second