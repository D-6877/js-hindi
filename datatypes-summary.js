//java script dynamically typed language

//premitive datatype   and non-premitive datatype or referenec data type

// primitive ----->
// 7 catagoiries: String ,Numer, Boolean, null , undefined, Symbol,BigInt

const score = 100;        // number  
const scoreValue = 100.3;   //number


const islogin = false;     //boolean
const outsideTemp = null;  // null
let userEmail;             // undefine

const id = Symbol('123');         //symobl
const anotherId =Symbol('123');   //symbol

console.log(id===anotherId);     //false


const bigNumber = 2426527682286826n;    //bigInt


//reference datatype ot non-primitive datatype----->
//Array, Objects, function

const heros =["ironman" ,"shaktiman","thor"];     // array non-primitive datatype



// object non-primitive data type     ----> return type ojects
let myobj = {           
    name:"deb",
    age:22,
}

//function  non-primitivedata type        --->return type function
const myfunction = function(){
    console.log("hello js coder! ");
}

//when i want to know the datatype of the veriable then i use this function
console.log(typeof outsideTemp);

