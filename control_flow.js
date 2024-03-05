// if statement

//if(condition){     // condition must be true
//}

// const userlosggedin = true;

// if( userlosggedin)
// {
//     console.log("user already log in!");
// }


//relational operator
// <, >, <=,>= ,!= ,===, !==

// if(2==="2")         // strick checking 
// {
//     console.log("it is equal");
// }
// else
// {
//     console.log("not equal");     
// }

// if(power)   // pwer undefined
// {
    
//      let power = 2434;
//     console.log(`the value of the power ${power}`);   // in this case power is undefined
// }

const balance = 1000;
// if(balance > 500 ) console.log("test"),console.log("test2");   // we can write this type but it is very ad syntax 



//if, else, else if statement

// const userloggedin =  true;
// const debitcard = false;

// if(userloggedin || debitcard)     // logical operator && , ||, !
// {
//     console.log("you can shoping");
// }
// else{
//     console.log("not");
// }

//switch case statement

// switch(key){
//     case 1:
//         break;
    

//     default: 
//         break;
// }


const month =6;

// switch (month) {
//     case 1:
//         {
//         console.log("it is january!");
//         break;
//        }
        
//     case 2:
//         console.log("it is february!");
//         break;
//     case 3:
//         console.log("it is march!");
//         break;

//     default:
//         console.log("defalut case match!");
//         break;
// }



//Nullish Coalesing Operator(??)
              //keyword----> null and undefined

let val1;
// val1 = 5 ?? 10;      // it print which is the first value 
// val1= null ?? 10;    // and it is used to sefty thats why in this case null value not assign in the val1

// val1 = undefined ?? 15   // in this case 15 can be replace any function

console.log(val1);



//teniary operator
// condition ? true : false


const iceteaprice = 100;
iceteaprice <=80  ? console.log("less then 80")  : console.log("more then 80");


