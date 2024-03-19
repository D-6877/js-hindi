// submit type event 

const form  = document.querySelector("form");


// this use case will give a empty value
// const height =  parseInt(document.querySelector("#height").value);
//    const weight =  parseInt(document.querySelector("#weight").value);

   

form.addEventListener("submit" , function(e){
    e.preventDefault();            // before submit prevent


   const height =  parseInt(document.querySelector("#height").value);
   const weight =  parseInt(document.querySelector("#weight").value);


   const result = document.querySelector("#results");


   // check for height
   if(height  === "" || height < 0 || isNaN(height)){     // is not a number => height

           result .innerHTML = "please give a valid height"
           //results .innerHTML = `please give a valid height ${height}`;    
   }

  // result.innerHTML = height    // set the height
   // check for weight
   else if(weight  === "" || weight < 0 || isNaN(weight)){     // is not a number => height

    result .innerHTML = "please give a valid weight"
    //results .innerHTML = `please give a valid height ${height}`;    
    }

    else{
       const BMI =  (weight/((height*height)/10000)).toFixed(2);

    
       //show the result
    //    result.innerHTML = `<span> ${BMI}</span>`

       if(BMI < 18.6){
           result.innerHTML = "BMI less than 18.6";
       }

       else if(BMI > 18.6 || BMI < 24.9){
        result.innerHTML = "the BMI is normal range";
       }

       else{
        result.innerHTML = "the BMI is Over weight";
       }
    }

    



});
