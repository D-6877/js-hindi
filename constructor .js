// constructor  --> it is a one type of method it is called when the object will be  create


class Toyotacar{

    constructor(brand){
        console.log("creating new object");
        this.brand = brand;  // this keyword referece to the current object

        console.log("the brand name is: ", brand);
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }


}

let fortuner = new Toyotacar("fortuner");   // initialize  means  the object create 

fortuner.brand = "lexus";  // to change the brand name 

console.log(fortuner);
