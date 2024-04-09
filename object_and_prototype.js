
// object creation 
const student = {

    // properties or state
    name:"Debsankar",   
    marks:90.0,

     // methods of this object or behaviour
    printMarks: function(){  
        console.log("marks is = ",  this.marks);
    }
};

// js objects have a special propery called prototype

let  arr =["mango", "orange", "banana", "apple"];


const employee= {

    // create a function this type
    clcTax(){
        console.log(" tax rate is 10%");
    },

    // it is a type to create a function in object both  are same
    // clcTax2: function(){
    //     console.log(" tax rate is 10%");
        
    // }

}

const KarnArjun = {
    salary: 50000,
    clcTax(){
        console.log(" tax rate is 20%");
    }
}


// const KarnArjun2 = {
//     salary: 50000
// }

// const KarnArjun3 = {
//     salary: 50000
// }

// const KarnArjun4 = {
//     salary: 50000
// }



// to create a prortotype ---> means store the properties and method of the employee into the karanArjun object 
KarnArjun.__proto__ = employee;
// KarnArjun2.__proto__ = employee;
// KarnArjun3.__proto__ = employee;
// KarnArjun4.__proto__ = employee;


