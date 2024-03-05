// without comparision 


// const useremail = "D@gmail.com"; 

// if(useremail){       // in the string any string vaue is present  that's why is provides the truthy value
//     console.log("got user email");        // output ----> got user email
// }
// else{
//     console.log("don't have user email");
// }


const useremail = "";   // in this case useremail is  empty value that's why is provides a falsy value
if(useremail){
    console.log("got usre email");
}
else
{
    console.log("don't have user email");  // output ----> don't have user email
}




// falsy values

// false, 0,  -0, bigint 0n, "", null,undefined , NaN

//truthy value
// "0", 'false',"   ",[],{}, function(){}



// it is used to find the array is empty
// const arr = [];
// if(arr.length === 0)    
// {
//     console.log("Array is Empty!");
// }


//it is used to find the object is empty or not

const user = {};
if(Object.keys(user).length === 0)
{
    console.log("this object is empty");
}




