// //date

// let mydate = new Date()    // to declare the date object 

// console.log(mydate);     
// console.log(typeof mydate);    //object


// //convert the date object into the string
// console.log(mydate.toString());              // Wed Feb 28 2024 19:06:52 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString());          // Wed Feb 28 2024
// console.log(mydate.toISOString());           // 2024-02-28T19:06:52.637Z
// console.log(mydate.toJSON());               // 2024-02-28T19:06:52.637Z
// console.log(mydate.toLocaleDateString());   // 2/28/2024
// console.log(mydate.toLocaleString());      // 2/28/2024, 7:06:52 PM


// let mycreatedDate = new Date(2023,0,23);       //    0  23 2023
// console.log(mycreatedDate.toDateString());    //Mon Jan 23 2023

// let mycreatedDate1 = new Date(2023,0,23,5,3);
// console.log(mycreatedDate1.toLocaleString());    // 1/23/2023, 5:03:00 AM

// let mycreatedDate2 = new Date("01-14-2023");
// // console.log(mycreatedDate2.toLocaleString());    // 1/14/2023, 12:00:00 AM


// let mytimestamp = Date.now();     
// console.log(mytimestamp);                //compare the value 
// console.log(mycreatedDate2.getTime());    //copare two value   those are represent the value milisecond value
// console.log(Date.now()/1000);   // it return the value in second  with decimal value ---->1709148300.083

// console.log(Math.floor(Date.now()/1000));  // if i neede the floor value then i use this properties --->1709148300

let newdate = new Date();
console.log(newdate.getDay());    // if i want to access the day  
console.log(newdate.getMonth());  // if i want to access the month


// `${newdate.getDay()} and time`

newdate.toLocaleString('defalut',{
    weekday: "long",
    
})



