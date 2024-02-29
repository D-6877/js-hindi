const marvel_heros = ["thor","Inronman" ,"spider"];
const dc_heros = ["superman","flash" ,"batman"];

// marvel_heros.push(dc_heros);    //array inside array 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);     // it is not right properly

// const newarray = marvel_heros.concat(dc_heros);   //it is used to concat two array
// console.log(newarray);

const all_new_heros = [...marvel_heros, ...dc_heros];   // spread  method  wec can spread  multiple array 
// console.log(all_new_heros);

const another_arr= [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_arr.flat(Infinity);      // it is used to flat the aray for another because inside the another_arr consist nested array 
// flat method is used to create a one array.
console.log(real_another_array);



console.log(Array.isArray("Debsankar"));     // it is used to ask it is array or not
console.log(Array.from("Debsankar"));     // it is used to convert to the array

console.log(Array.from("Debsankar"));     // it is used to convert to the array
console.log(Array.from({name: "Debsankar"}));     // it reprsent the array basis on the key value

//it represnt the array is []
// it is interesting part of the array

let score1 = 100;
let score2 = 200;
let score3  = 300;

console.log(Array.of(score1, score2, score3));  // it is used to create an array wiht the given value







     


