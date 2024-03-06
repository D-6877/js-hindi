//for each loop---> call back function   ----> call back function means which has no  finction name and any argument name which user want 




const programming = ["java","c++","c","python","swift","golang"];

programming.forEach(function (value) {
    //console.log(value);
})


//arrow function
programming.forEach((item)=>{
    //console.log(item);
})



// pass the function in for each loop
function printme(item)
{
    //console.log(item);
}

programming.forEach(printme);



// interesting part of the for each loop 
programming.forEach((item, index, arr)=>{    // item---> value ; index---> print the index of the array ; arr---> means print the arraylist
   // console.log(item, index, arr);
})



// implement for each loop on the array object
// it is most use in database value
const mycoding = [
    {
        languageName:"javascript",
        languageFile: "js"
    },
    {
        languageName:"java",
        languageFile: "java"
    },
    {
        languageName:"python",
        languageFile: "py"
    },
]



mycoding.forEach(function(value){
    console.log(value.languageName);
})