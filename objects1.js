//singleton object
const  tinderUser = new Object ();

//const user = {}; // it is a literal object or non singleton object  


 tinderUser.id = " 123abc";     // add id  to the object
 tinderUser.name = " shyam";    // add name to the object
 tinderUser.isloggedin = false;  


//  console.log(tinderUser);

const regularuser = {
    email:"some@gmail.com",                  // nested object create 
    fullname:{                                 // nested object 
        user_fullname:{                       // nested object
            firstname:"debsankar",
            lastname:"dhara"
        }
    }
}

// console.log(regularuser.fullname.user_fullname.firstname);    // access the nested object value


// //optional chaining ---> it means the key is exist or not
// console.log(regularuser.fullname?.user_fullname.firstname);    // it means the fullname is exist or not if exist then follow the instruction


// merging two object


const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
const obj3 = {
    5: "a",
    6: "b"
}
// const obj3 = {obj1, obj2};   // to merge the object1 and object2

// //it is a one type of the merge method
// const new_object = Object.assign({}, obj1, obj2, obj3);  // {}-> represet the target obj1,obj2, obj3 those are source


//spread method 
const new_object= {...obj1,...obj2,...obj3};    //most probably used  in merge in object
console.log(new_object);



// it is use when data came to database the it is the form of the array of object
const users = [
    {
        id:1,
        email: "gmail@gmail.com"
    },
    {
        id:2,
        email: "email@gmail.com"
    },
    {

    }
]


console.log(users[0].email);      // users[0] means 0 index's emial 
console .log(users[1].email);     // users[1] means 0 index's emial 

console.log(tinderUser);           
console.log(Object.keys(tinderUser));     // it prints the key value if the objects which is the form of the array
console.log(Object.values(tinderUser));   // it prints the value of the objects 

console.log(Object.entries(tinderUser));    // it is use separate all key or value and store in the separated array

console.log(tinderUser.hasOwnProperty('isloggedin'));   // it is used to check the value is exist or not it produce the result the value of true or false





