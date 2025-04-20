// Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2

// function callback(){
//     console.log("hi");
// }
setTimeout(function(){
    console.log("hi");
    //this hi will print after 1second

    //for hello after 3second of hi 
    setTimeout(function(){
        console.log("hello");

        //to print hellow after 5second of hello there
        setTimeout(function(){
            console.log("hello there");
        },5000);


    },3000);

}
,1000);