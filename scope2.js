//nested scope

function one(){
    const username = "Debsankar";

    function two()
    {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);     //it can not accessable

    two();
}


// one(); it calls the one function


if(true)
{
    const name = "Debsankar";
    if(name === "Debsanakr")
    {
        const website = "youtube";
        console.log(name+website);
    }
    // console.log(website);   // it can not accessable  because it outside the scope
}
// console.log(name); // it can not be accessable  because it outside the scope


//+++++++++++++++++++++++++++++++ interesting concept +++++++++++++++++++++++++++++++++++

console.log(addone(5));   // in this case -----> it doesn't matter function calling before the declaration the function
function addone(num)
{
    return num+1;
}

//Hoisting
//JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.





// in this case if i want to access the vale of the addtwo function the i will get the error because i access the value befoe create the function
const addtwo = function( num){
    return num+2;
}

addtwo(5);