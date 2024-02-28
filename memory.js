//stack memory   or heap memory
// stack memory -----> primitive datatype store
//heap memory    -----> non-primitive datatype store   

// when i store the variabe in the stack then it return a copy of  this variable
// when i use non-primitive datatype which will be store in the heap the it return the reference of this vairable

let myname = "Debsankar";   

let anothername = myname;
anothername = "Dhara"

console.log(anothername);
console.log(myname);


let user1={
    email:"googl@gmail.com",
    user: "user@ybl"
}

let user2 = user1;

user1.email = "Debsankar@gmail.com";
console.log(user1.email);
console.log(user2.email);
