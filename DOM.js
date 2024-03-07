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


