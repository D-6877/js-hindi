function symyname(){
    console.log("hey everyone my name is Debsankar");
}

symyname();

// function addtwonumbers( num1, num2){
//    console.log( num1+num2);
// }

// const result = addtwonumbers(3,4);      //output 7
// console.log(result);                    //in tis case the result willl be produced undefined



// function addtwonumbers( num1, num2){      // parameters
//     console.log(  num1+num2);
//  }
 
//  addtwonumbers(3,"4");      //output 34    // arguments



 
 function addtwonumbers( num1, num2){

    // type  to write the function 

    //first
    // let result  = num1+num2;
    // console.log("Debsankar");    // it must be write this code before pass the resturn value
    // return result;

    //second
    return num1+num2;
 }
 
//  const result = addtwonumbers(3,4); 
// //  console.log(result);

function loginusermessage(username)
{
    if(username === undefined){
        console.log("please enter the username ");
        return;

    }
    return `${username} just logged in`;

}
 
//const result = loginusermessage("Debsankar");   // it produce the reslut is  Debsankar just logged in
//  console.log(loginusermessage());                // it roduce the result is undefines just logged in  that's why  i have to use if else condition

 



function loginusermessage(username)
{
    if(!username){     //it is a one type checking method to declare the username undefined or not
        console.log("please enter the username ");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginusermessage());


function loginusermessage(username = "sam")     // when a user doen't pass the any argument the we can set the defalut value as it
{
    if(!username){     //it is a one type checking method to declare the username undefined or not
        console.log("please enter the username ");
        return;

    }
    return `${username} just logged in`;
}

console.log(loginusermessage("Debsankar"));    //  output ----> Debsanakr ...
console.log(loginusermessage());             // output ------> sam.....     because the dealut value is sam