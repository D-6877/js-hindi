// how to declare the string in java script
let name ="Debsankar";
let repocount = "3";

// console.log(name+repcount);   // concatenate of the string  


//string interpolation   ---> mostly it is use in java script 
console.log(`hello my name is ${name} my repo count is ${repocount}`);


// how to declare the String javascript using constructor
let gamename = new String("Debsankar-dhara");


console.log(gamename[0]);

console.log(gamename.__prototype__);

console.log(gamename.length);  //find the length of the string
console.log(gamename.toUpperCase());   //it doesn't chnge the original value because it store in the stack that's why is return the copy od the variable this copy variable will be change

console.log(gamename.charAt(6));    // which character is present the in the reuquried index
console.log(gamename.indexOf("n"));  // find the idex of the recuired character



let newString = gamename.substring(0,5);   // substring find
console.log(newString);


let anotherString = gamename.slice(-15,3);  //slice method which is include negative value
console.log(anotherString);

let newString1 = "     Debsakar    ";
console.log(newString1);
console.log(newString1.trim());   // it remove the space of the string


let url="https://Debsankar.com/Debsankar%20Dhara"
let replace1= url.replace("%20" ,"-");              // this method is used to replace the unwanted objects
console.log(replace1);



console.log(url.includes("Debsankar"));    // ask an question any object is present in the string or not


console.log(gamename.split("-"));     //it is used to split the string 
