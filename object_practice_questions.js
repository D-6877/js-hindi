
let data = "screat information ";
class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data= ",data);
    }
}

let student1 = new user("debsanakr", "debsanakr@gmail.com");
let student2 = new user("suman","suman@gmail.com");

let student3 = new user("sukesh","sukesh@gmail.com");

student1.viewData();

// console.log(student1);

// console.log(student2);
// console.log(student3);
