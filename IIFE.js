// immediately invoked fuction expressions(IIFE)
function  one(){
    console.log("DB connected");
}
one();

(function  one(){
    console.log("DB connected");
})();                         // iife structure

//()()     first perentheses  represent the function declaration and last perentheses represent the immediate function call


//it will be throw error because the the IIFE not know where the function will stop that's why after write the second perentheses must be write semicolon
// using arrow function IIFE implementation 
( () =>  {
    console.log(`DB connected `);
})()

// passing the value usinf IIFE
( (name) =>  {
    console.log(`DB connected ${name} `);
})("Debsankar");

