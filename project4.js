
let randomNumber = parseInt(Math.random()*100 + 1)    // +1 becuse any number will be generate zero that's why


const submit = document.querySelector("#subt");

 const userInput = document.querySelector("#guessField");
 const guessSlot = document.querySelector(".Guesses");
 const remaining = document.querySelector(".lastResult");
 const lowOrhi = document.querySelector(".lowOrHi");
 const startOver = document.querySelector(".resultParas");

const p  = document.createElement("p");    // create a new paragraph element


let prevGuess = [];
let numGuess = 1;

let playGame = true;


if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);     //input the number from the user (i can use to get the input as .value)
        validateGuess(guess);

    })
}


function validateGuess(guess){
    //  guess the value lay in range between 1 to 100

    if(isNaN(guess)){
        alert("please enter a valid number!");
    }
    else if(guess < 1){
        alert("please enter the valid number!");
    }
    else if(guess> 100){
        alert("please enter a number less than 100!");
    }
    else{
        prevGuess.push(guess);   //store the elemet in the array;
        if(numGuess > 10){
            displayGuess(guess);
            displayMessage(`game over. random number is ${randomNumber} `);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    //
    if(guess === randomNumber){
        displayMessage(` you guess it right`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`number is Tooo  low`);
    }
    else if(guess > randomNumber){
        displayMessage(`number is Tooo  high`);
    }
}

function  displayGuess(guess){    // clean up the inpt box
    userInput.value  = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;

}

function displayMessage(message){

    lowOrhi.innerHTML = `<h2>${message}</h2>`

}


function endGame(){

    userInput.value = "";
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> Start New Game</h2>`;

    startOver.appendChild(p);   
    playGame = false;  
    newGame()


}

function newGame(){
    const newgamebutton = document.querySelector("#newGame");
    newgamebutton.addEventListener('click', function (e){
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    });

}







