
// -------------------async or await----------------------

// async function always a return a promise.
// it is used with the function

// await pauses the execution of its surrounding async function until the promise is settled
// await is only used  inside the async function


// async function hello(){
//     console.log("hello");
// }

function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Weather Data");
            resolve(200); // success full api return vale on the web page
        }, 2000)
       
    })
}

// await api();  we can not  directly use like that

// always inside  the async function
async function getWeatherData(){
    await api();  // 1st call
    await api();  // 2d call
    // api().then((res)=>{
    //     console.log(res);
    // })
}
// getWeatherData();


function getData(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success");
        }, 3000)
    })
}

// async function dataAccess(){
//     console.log("getting Data1......");
//     await getData(1);
//     console.log("getting Data2......");
//     await getData(2);
//     console.log("getting Data3......");
//     await getData(3);
//     console.log("getting Data4......");
//     await getData(4);
//     console.log("getting Data5......");
//     await getData(5);
//     console.log("getting Data6......");
//     await getData(6);

    
// }

// dataAccess();




// IIFE function --> does not have any name  it can run withot function call
// immediately invoked function expression  
(async function (){
    console.log("getting Data1......");
    await getData(1);
    console.log("getting Data2......");
    await getData(2);
    console.log("getting Data3......");
    await getData(3);
    console.log("getting Data4......");
    await getData(4);
    console.log("getting Data5......");
    await getData(5);
    console.log("getting Data6......");
    await getData(6);

})();




// where .then/.catch works there async doesnot work
// where async works there .then/.cathch doesn't work
