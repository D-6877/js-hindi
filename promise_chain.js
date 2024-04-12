
//------------------------ promise chain ----------------------
function asyncFun1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data1");
            resolve("success");
        },4000)
    })
}

function asyncFun2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data2");
            resolve("success");
        },4000)
    })
}


// ------------------------------promise chain-------------------
// console.log("fetching data1.....");
// let p1 = asyncFun1();
// p1.then((res)=>{
//     // console.log(res);  // print the result for the async function 1
//     console.log("fetching data2.....");
//     let p2 = asyncFun2();
//     p2.then((res)=>{
//     // console.log(res);  // print the result for the async function 2
//    })
// })




// // simplest method  to create a promise chain
// console.log("fetching data1......");
// asyncFun1().then((res)=>{
//     console.log("fetching data2.......");
//     asyncFun2().then((res)=>{

//     })
// })




function getData(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success");

        }, 3000)
    })
}


// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     })
// })





//---------------- actual romise chain-----------------------
getData(1)
  .then((res)=>{
    return getData(2);
  })
  .then((res)=>{
    return getData(3);
  })
  .then((res)=>{
    console.log(res);
  })
