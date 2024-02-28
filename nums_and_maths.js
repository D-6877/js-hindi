// //-------------------------------------number-------------------------------------

// const score = 4400;
// console.log(score);
// const balance = new Number(100);
// console.log(balance);


// console.log(balance.toString());            //prototype fo the number
// console.log( typeof balance.toString());    // check the it is string or not
// console.log(balance.toString().length);  //use of the string property after converting the number int string

// console.log(balance.toFixed(3));  // it is use when i wan to zero after point it means it represent te value id 100.000

// const othernumber = 23.4653;

// console.log(othernumber.toPrecision(3));  // accroding user requirement we can increase and decrese the digit of the number
//                                            //it represnt the value is 23.5 


// const hundreds = 1000000;
// console.log(hundreds.toLocaleString());    // it represnt the value is 1,000,000   it use foreign
// console.log(hundreds.toLocaleString('en-IN'));  //it represent the value if 10,00,000  it use in india



//+++++++++++++++++++++++++Maths+++++++++++++++++++++++++++

// console.log(Math);                 // objects 

// console.log(Math.abs(-4));         //abs --> absolute value which is use to convert the number into the positive value

// console.log(Math.round(4.6));      // this function is usde to round the value  it produce the value is 5

// console.log(Math.ceil(4.2));       // this is use the find the ceiling valu of the number  it produce the value is 5 

// console.log(Math.floor(4.9));      // this is use to find the floor value of the number it produce the value id 4


// console.log(Math.sqrt(25));       // it is use the squere root of the value

// console.log(Math.min(4,5,2,7,1,3,9));   // it is use to find the min value of the array
// console.log(Math.max(4,5,2,7,1,3,9));   // it is use to find the max value of the array

console.log(Math.random());    // it is use to generate the random value whose range will be  form 0 to 1
console.log(Math.floor(Math.random()*10) + 1);   // in this case if i want to generate the minimum value then it may be return the 0 value because it rage starts form 0 to 1



const min = 10;
const max =20;
console.log(Math.floor(Math.random() * (max-min+1) +min ));    //minimum value generate range between 10 to 20 formula








