// for in loop

// it is used to print the object 

const myobject = {
    js:"java script",
    cpp:"c++",
    rb:"ruby",
    py:"python",
    swift:"swift by apple"
}

for (const key in myobject) {
    //console.log(myobject[key]);    // it is use the print the value of the object
}


for (const key in myobject) {
   // console.log(`${key}  shortcut is for ${myobject[key]}`);   // it is use the print the all key and value from the object 
    
}


//can i use for-in loop in array
const programming = ["java","c++","c","python","swift","golang"];

for (const i in programming ) {
    //console.log(i);   // it print the index of array from  0 to array.length-1
}



for(const i in programming)
{
    //console.log(programming[i]);    // it print the all value of the array
}


// map access using for in loop
// map is not accessable because map is not iterable   i have to iterate the map using another method
const map = new Map();
map.set('IN', "India");
map.set('US', "United states of america");
map.set('FR', "france");
map.set('IN', "India");   

// for(let i in map){
//     console.log(i);   // map is not accessable
// }




