// In JavaScript, a Promise is an object that will produce a single value some time in the future.
// promise is a one type of object
// two part of the promise 1. cosume and 2.create
// promises takes call back as a parameter and callback  function  take two parameter 1. rsolve and 2. reject


const promise1 = new Promise(function(resolve , reject){
    // Do an async task
    // DB calls, cryptography, network 
    setTimeout(function(){
        console.log("Async task is complete!");
        resolve();
    },1000)
})   


// promise consume ---> resolve
// then direct establish the connection ----> resolve
promise1.then(function(){
    console.log("promise consumed!");
})


// method-2 to create a promise without the variable 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two!");
        resolve();
    },1000)

}).then(function(){    // resolve is working then automatic resolve (then)funnction will be work 
    console.log("Async two rsolved!");
})


//method-3   how to pass the data through resolve  and how to consume the data through (then)
 const promise3 = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve({username:"Debsanakr", email:"Debsankar@gmailcom"})   // resolve  sends the data(object) 
    }, 1000);
})

promise3.then(function(user){
    console.log(user);
})



//method-4 promise
const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error =  true;
        if(!error)   // doesn't contain error
        {
            resolve({username:"Debsankar",password:"1234"})
        }
        else{
            reject("Error: Something went wrong");
        }
    }, 1000)
})


// // we can not access the value like this 
// const username = promise4.then((user)=>{
//     console.log(user);
//     return user.username;
// })
// console.log(username);


// to access  the value that's why i have to chaning like this
promise4.then((user)=>{
    console.log(user);
    return user.username;   // return the value(username ) of the object(user) 
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log(" the promise is eaither resolved  or rejected!");
})




//method-5   handel the error using async way
// another way to access the data
const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error)
        {
            resolve({username:"javascript",password:"1234"})
        }
        else{
            reject("ERROR: JS went wrong!")
        }
    }, 1000)
});

async function consume5(){
    try{    // it does not provide to handel the exceptions that's why i have to use the try and catch block
        const response = await promise5;
        console.log(response.username);
    }
    catch(error){
        console.log(error);
    }
}
consume5();// call the function




// // create a json and access the data
// async  function getapi(){
//     try {
//         // fetch is an library that resturn the promise  
//      const response = await fetch("https://api.github.com/users/D-6877");
//     //  const data = response.json();
//     //  console.log(data);   // it may take too much time to access the api  
//     // console.log(response)

//     const data = await response.json();  // that is the best way to access the data
//     console.log(data);

//     } catch (error) {
//         console.log("E", error);
//     }
// }

// getapi();


fetch("https://api.github.com/users/D-6877")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))