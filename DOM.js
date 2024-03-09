// document object model

document.getElementById("first Heading").innerHTML("Debsankar");
document.getElementById("title").id // ---> it print the id 

document.getElementById("title").className //----> it print the class name 

document.getElementById("title").getAttribute("id") //----> we can access the id or attribute 
document.getElementById("title").getAttribute("class")// -----> we can access the class name or attribute

document.getElementById("title").setAttribute("class","test");  //---> it is use set the atribute name
// it always overide the name of the class attribute 
// if any class name has = "title" then i set the class name is test then it will be override class name will be test
// it return value will be undefined


document.getElementById("title").setAttribute("class","test heading");//----> it is use to set two attribute 
// in this case the class name will be test and heading



const title= document.getElementById("title");//---> it is used to store the value of object


title.style.backgroundColor = "green" //---> title is object that's why we can access the key and value using . operator  like as
style = "backgroundColor = green"; //--> we follow the syntax to chage the style in the html file
// it change the background color which will be green


title.style.padding = "30px";   //---> it is use the set padding
title.style.borderRadius = "30px"; // ---> border radius change


// access the content
title .textContent;
title .innerHTML;
title .innerText;
// those are produce the same value but it has differenece 


title.textContent   //---> it shows all content which is writen in the html file
title.innerText    //----> it shows all content which is showing the web browser
title.innerHTML    // ----> it shows all html content including all tags 



document.getElementsByClassName("heading") //---> it access the content through the class name


document.querySelector("h1");  // --> it is use  access  the first query which i  want here i want to access the h1.
document.querySelector("h2");  // ---> it is the same 


// access the id and class with quer selecter method ---> in query selector return only one value

document.querySelector("#title");  // access the id  which is write with the # symbol
document.querySelector(".heading");  // access the class which is write with . symbol

document.querySelector('input[type = "password"]');//   access the password which type is password

document.querySelector("ul");   // it is access the unorder list like that
myunorderlist.querySelector("li");

const turngreen = myunorderlist.querySelector("li");  // to store the value of the li 
turngreen.style.backgroundColor = "green";   //  perform the style operation in which the background color will be green
turngreen.innerText;  // perform muliple operation
turngreen.innerText = "four";  // change the value of the first list.



// querySelectorAll----> method which is holds all value in the form of nodelist

document.querySelectorAll("li");  //  ---->  we can check prototype 

//it is one type of array but it is not array it is similar to array 
const templilist =  document.querySelectorAll("li");
// but it has not any map prototype

// if i want to change the color of listlike that
// templilist.style.color = green;   // ---> it does not work because it is in the form of array  that's whay i heave to use like that

templilist[0].style.color = green;
templilist[0].style.textDecoration = "underline";

// use forEch loop        ---------------->  shift+enter
templilist.forEach(function (li){
    li.style.color = "green";
    })



// another example
const myh1 = document.querySelectorAll("h1");
myh1[0].style.color = "green";


// html collection   which is different the node list
document.getElementsByClassName("list");//----> it return the html collection on which we can not perform any loop because it has not any loop prototype
const list = document.getElementsByClassName("list");

//it have to convert into the array
const convertarr = Array.from(list);// it is array method
convertarr.forEach(function (li){    // use for each loop
    li.style.color= "green";
})


//another example
headline.forEach(function (h) {
    h.style.color = "black";
    h.style.backgroundColor = "red";
    h.style.padding = "30px";
    h.textContent = "debsankar";
})