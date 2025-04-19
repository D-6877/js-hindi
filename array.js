//array

const myarray = [0,1,2,3,4,5];

//JavaScript arrays are resizable and can contain a mix of different data types.

console.log(myarray[2]);
//JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).


let myheros = ["shaktiman","nagraj"];

const myarray2 = Array(1,2,3,4);


//method of array
myarray.push(6);        
myarray.push(7);   

myarray.pop();  
console.log(myarray);

myarray.unshift(9);     //add element the firt of the array using shift it is time consuming
myarray.shift();  

console.log(myarray.includes(9)); // it ask the elemets is include or not its return the result is true or false
console.log(myarray);

console.log(myarray.indexOf(9));   // it ask the 9th index is exist or not it will be return -1 value
console.log(myarray.indexOf(3));


const newarray = myarray.join();  // it store the all element of the myarray which will be string form
console.log(myarray);         // it's type is array
console.log(newarray);        // it's type is string
console.log(typeof newarray);


// slice, splice method
  
console.log("A", myarray);                //A [ 0, 1, 2, 3, 4, 5 ]
const myarray1 = myarray.slice(1,3);     //range is not include it produce 1, 2

console.log(myarray1);                  //[ 1, 2 ]
console.log("B",myarray);               //B [ 0, 1, 2, 3, 4, 5 ]

const myarray3 = myarray.splice(1,3);       //range is incude it produce 1,2,3
console.log("C",myarray);                   //C [ 0, 4, 5 ]
console.log(myarray3);                        //[ 1, 2, 3 ]



// const deletedUser = data.splice(userIndex, 1)[0];
// is a common and clean way to both delete an item from an array and store the deleted item.



// How it works:
// data.splice(userIndex, 1) removes 1 item at the position userIndex from the data array.
// splice() returns an array of the removed items.
// [0] grabs the first (and only) deleted item.



const data = ["a", "b", "c"];
const deleted = data.splice(1, 1)[0];

console.log(deleted); // "b"
console.log(data);    // ["a", "c"]



// splice(startIndex, deleteCount)
// This returns a new array containing the deleted items.
const arr = ["apple", "banana", "cherry"];
const removed = arr.splice(1, 1); // removes 1 item at index 1

console.log(removed); // ["banana"]   
// But removed is an array, so to get the actual deleted item, you do:
const deletedItem = removed[0]; // "banana"


// important---------------------
const deletedUser = data.splice(userIndex, 1)[0];
// This:
// Deletes the user at userIndex
// Returns an array like [deletedUserObject]
// [0] gets the actual user object from the array


 // if you don’t use [0], you’ll still delete the user, but the value stored in deletedUser will be an array, not the actual user object.

// ✅ With [0]:

const deletedUser = data.splice(userIndex, 1)[0];

console.log(deletedUser);
// Output: { objectId: "661f...", name: "john_doe", displayName: "John Doe" }


// ❌ Without [0]:

const deletedUser = data.splice(userIndex, 1);

console.log(deletedUser);
// Output: [ { objectId: "661f...", name: "john_doe", displayName: "John Doe" } ]
