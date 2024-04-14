  
const url = "https://cat-fact.herokuapp.com/facts";

// let promise = fetch(url);

// console.log(promise);

let simpleText = document.querySelector("#simpleText");
let btn = document.querySelector("#btn");



// using async and await 
const getFacts = async()=>{
    console.log("getting data.....");
    let response = await fetch(url);
    console.log(response.status);

    // to readable the response we have to convert the data into json formate that's why i have to call the json function
    let data = await response.json();  // it is a one type of asynchronous funtion 
    console.log(data); // it print the data in the json formte it provides object inside the array
    console.log(data[0].text); //  it print the 0 index of the array and print the text from the array
    // we can print the different different key and values
    

    // add the text on the web page
    // simpleText.append(data[0].text);
   
    
}


// promise chaining


// function getFacts(){
//     fetch(url)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         simpleText.innerText = data[0].text;
//     })
// }


// getFacts();
btn.addEventListener("click", getFacts);

// btn.addEventListener("click", ()=>{
//     setTimeout(()=>{
//         getFacts();
//     })
// })
