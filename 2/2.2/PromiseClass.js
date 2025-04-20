

// call resolve function after 3 seconds
function waitFor3s(resolve){
    setTimeout(resolve,3000);
}

function main(){
    console.log("main is called after 3 seconds");
}

waitFor3s(main); // This will call the main function after 3 seconds