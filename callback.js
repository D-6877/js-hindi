
//async await >> promise chain >> callback hell



// syncronous ---> synchronous means the code runs in a particular sequence of instructions given in the PerformanceNavigationTiming.
// asynchronous ----> do not execute sequence 

// function hello(){
//     console.log("hello");
// }

// setTimeout(hello, 5000) //timeout

// console.log("one");
// console.log("two");
// console.log("three");


// it will bw print after 5s 
// setTimeout(()=>{
//     console.log("hello");
// }, 5000)

// console.log("four");
// console.log("five");
// console.log("six");


//--------------------------callbacks------------------------------
//A callbacks is a function passed as an argument to another function


// first example----------------->
// function sum(a, b){
//     console.log(a+b);
// }


// function calculator(a,b, sumCallback){
//     sumCallback(a, b);
// }

// calculator(1,2 , sum);

//second example------------------>
// const hello = ()=>{
//     console.log("hello");
// }

// setTimeout(hello, 3000);    // hello is a function pass as a function

//-------------------------- callback Hell -------------------------------

// callback hell: Nested callbacks stacked below one another forimg a pyramid structure (pyramid of doom)
// this style of programming  becomes difficult to understand & manage


// nesting
// for(let i=0;i<5;i++)
// {
//     let str = "";
//     for(let j=0;j<5;j++){
//         str = str+j;
//     }
//     console.log(i, str);
// }

// function getData(dataId){

//     setTimeout(()=>{
//         console.log("data", dataId);
//     }, 3000)
// }


// // all of these output print at a time
// getData(1);
// getData(2);
// getData(3);


//i want to access the data in sequence
//data1   //2s
//data2   //2s
//data3   //2s


function getData(dataId, getNextData){   // getNextData--> print the data after print the first data 
    //2s 
    setTimeout(()=>{
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
        
    }, 2000)
}

// callback Hell --> nested callbacks

getData(1, ()=>{
    getData(2, ()=>{
        getData(3, ()=>{
            getData(4);
        })
    })
});






