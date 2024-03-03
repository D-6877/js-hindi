//this keyword  provides the current object 

const user={
    name: "Debsankar",     // it is global bject
    price:123,
    

    welcomemessage : function() {
        console.log(`${this.name}, welcome to website`);     //here 'this' method refers the current object
        console.log(this);
    }
}


user.welcomemessage();

user.name = "syam";
user.welcomemessage();  // after change the name


console.log(this);  //inside the node environment this referse to the empty object

// most probably global object is window object in juva script because the few years  ago had only browser to run the javascript code


function chai(){
    let username  = "Debsankar";
    console.log(this.username);     // we can not use this inside the function. we can use this keyword only inside the object
}
chai();

// it is a one type of the function
const chai = function(){
    let username  = "Debsankar";
   console.log(this.username); 
}

chai();


//create a arrow function

const chai = () => {
    let username  = "Debsankar";
   console.log(this); 
}

chai();


const addtwo = (num1, num2)=>{     // if i use curly braces  then i have to use return keyword 
    return num1+num2;
}
console.log(addtwo(4,5));


// implecit return 
const add1 = (num1, num2)=>  num1+num2;

const add2 = (num1, num2)=>  (num1+num2);   // it i not use the crly braces  then i doesnot nedd to return keyword
//most usage of this type in react


// how to return object the using arrow function
const add3 = ()=>  ({username: "Debsanakr",age: 21})
console.log(add3());


// const myarray = [1,2,3,4];

// myarray.forEach(()=>{})    //hoe to use the arrow function inside the array

