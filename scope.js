// {} ---> inside the curly brace  any variabe and any thing will be curly brece  that will be scope



//global scope
//var c = 300;   // it doesn't use 



let a = 300;


if(true){
    //block scope
    let a = 10;
    const b = 20;
    console.log("Inner value of the A: ", a);    //it only in the scope that's why it value is 10 
   
}




console.log(a);   // output --> 300 because it is outside the block scope  which is global scope
//console.log(b);   //output ---> not define
//console.log(c);    //output --> 30


