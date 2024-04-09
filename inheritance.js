
// inheritance ---> inheritance is passing down properties and methods from parent class to child class
// it is performed by exends keyword

// class parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class child extends parent{}


// let obj = new child();

// console.log(obj.hello());   // accessing the value from the parent class through the child class


class person{

    constructor (){
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }

    work()
    {
        console.log("do nothing!");
    }
}

class Engineer extends person{

    work(){
        console.log("solve probles , build something");
    }
}


class Doctor extends person{
    work(){
        console.log("treat patients");
    }
}

let manObj = new Doctor();






