
const course ={
    name:"jsihindi",
    price:999,
    teacher:"hitesh"
}


//de structuring 
// const teacher = course.teacher;  
const {teacher} = course;    // both are representing the same thing 

console.log(teacher);

const {teacher : teach} = course;    //how to object destructor 
console.log(teach);



//   API  introduction--->application programming interface


//it is one type of api
// {                              //json api struudture it is a one type of the object  but it has not any name
//     "name":"Debsankar",
//     "cousename": "js",
//     "price": free
// }


//check this link it a api structure
//https://api.github.com/users/hiteshchoudhary  



//somehow we get this api structure   object inside the array
// [
//     {},
//     {},
//     {}
// ]


