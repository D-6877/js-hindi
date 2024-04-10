
// class person{
//     constructor(){
//         console.log("enter the parent constructor!");
//         this. species = "homo sapiens";
//     }

//     eat(){
//         console.log("eat");
//     }
// }

// class engineer extends person{

//     constructor(branch){
//         console.log("enter the child constructor!");
//         super();    // it invoked parent class constructor
//         this.branch = branch;
//         console.log("exit tha child constructor !");
//     }

//     work(){
//         console.log("solve problems , build something!");
//     }
// }

// let engObj = new engineer("chemical eng");


class person{
    constructor(name){
       
        this. species = "homo sapiens";
        this.name = name;

    }

    eat(){
        console.log("eat");
    }
}



class engineer extends person{

    constructor(name){
       
        // it means we passed the name to the parent class constructor
        // if i access the engObj the we can see the constructor name  is debsanakr(name)
        super(name);    // it invoked parent class constructor  
        

       // super() // --> it means we does not pass the value to the constructor 
        // this.name = name;
        // if i access the engObj the we can see the constructor  name is undefined

    
       
    }

    work(){
        super.eat() // access the parent class from the child class through super keyword
        console.log("solve problems , build something!");
    }
}



let engObj = new engineer("Debsankar");

console.log(engObj);

engObj.work();
