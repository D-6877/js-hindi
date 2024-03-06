// for of loop

// it is use to print the array value 
//["","",""]
//[{},{},{}]

// use in array
const  arr = [1,2,3,4,5];
for (const i of arr) {  
    //console.log(i);   

}

//use in string
const str = "hello world";
for (const i of str) {
    //console.log(`each character is: ${i}`);
}

// Maps---> it is a object which holds key-value pairs and remebers the original insertion order of the keys
const map = new Map();
map.set('IN', "India");
map.set('US', "United states of america");
map.set('FR', "france");
map.set('IN', "India");      // duplicate doesn't exists   unique

// console.log(map);


//for of loop in map

for (const [key, value] of map) {
    //console.log(key+" "+ value);
}


//access the object value of using for of loop

user ={
    name:"Debsankar",
    roll:3311,
    age:21,
    email:"D@gmail.com"
}

// for (const [key , value] of user) {    // in this case object not iterable if i want to iterate the object then i  have to use another for loop 
//     console.log(key+" "+ value);
// }





