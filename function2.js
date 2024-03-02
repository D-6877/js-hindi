function calculateCartPrice(num1 ){
    return num1;
}

console.log(calculateCartPrice(200,300,400));         // output only 200 other twon numbers will not be print to overcome this problem we use rest or spread


//rest or spred
function calculateCartPrice(...num1 ){    //it store the all argument into the array
    return num1;
}

console.log(calculateCartPrice(200,300,400,3763,90183));   //output -->[ 200, 300, 400, 3763, 90183 ]


function calculateCartPrice(val1, val2 , ...num1 ){    //it store the all argument into the array
    return num1;
}

//val1 = 2000 and val2 = 300

console.log(calculateCartPrice(200,300,400,3763,90183));   //output -->[ 400, 3763, 90183 ]


//object handel through function

//type 1 to access the object through the function
const user = {    
    name:"Debsankar",
    price: 1000,

}

// how to access the object through function 
function handelObject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
}
handelObject(user);


//type 2 to access the object through the function
const user1 = {    
    name:"Debsankar",
    price: 1000,

}

// how to access the object through function 
function handelObject(user1){
    console.log(`username is ${user1.name} and price is ${user1.price}`);
}
handelObject(user1);


//type 3  

function handelobject(myobject){
    console.log(`my name is ${myobject.name} and my price is ${myobject.price}`);
}

handelobject({
    name:"Debsankar",
    price: "1200"
})


//how to pass the array through the function
const arr = [1,2,3,4,5];
function handelarray(arr)
{
    console.log(arr[0]);
}

handelarray(arr);



//type2
function handelarray(arr1)
{
    console.log(arr1[2]);
}

handelarray([1,2,3,4,5]);



