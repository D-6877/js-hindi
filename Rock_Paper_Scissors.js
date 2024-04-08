
let userScore = 0;
let compuetScore = 0;

const choice = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score")
const computerScorePara = document.querySelector("#comp-score")



const  genComputerChoice = ()=>{
    let options = ["rock", "paper", "scissors"];
    // rock paper scissors

    const randomIdx = Math.floor(Math.random()*3);  // it generate the index 
    return options[randomIdx];  // it returns the value with the help random index
}

const playGame = (userChoice)=>{

    console.log("user choice is this value", userChoice);

    // generate a computer choice   --> modular
    const computerChoice = genComputerChoice();

    console.log("computer choice is this value", computerChoice);


    if(userChoice === computerChoice){
        // draw Game
        drawGame();
    }
    else{


        let userwin = true;
        if(userChoice  ==="rock")
        {
            //scissors, paper
            userwin = computerChoice === "paper " ? false : true;
        }
        else if(userChoice === "paper"){
            // rock , scissors
            userwin = computerChoice==="scissors "? false : true;
        }
        else{
            // rock, paper
           userwin=computerChoice==="rock"? false: true;
        }

        shoeWinner(userwin);
    }


}

const drawGame = ()=>{
    const display = document.querySelector("#msg");
    display.innerText = "Draw Game";
    display.style.backgroundColor = "black";
    display.style.color= "white";
    console.log("the game is draw");
}

const shoeWinner = (userwin)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;

        const display = document.querySelector("#msg");
        display.innerText = "you win";
        display.style.backgroundColor = "green";
        display.style.color= "white";

        
        console.log("you win!");
    }
    else{

        compuetScore++;
        computerScorePara.innerText = compuetScore;
        const display = document.querySelector("#msg");
        display.innerText = "you lose";
        display.style.backgroundColor = "red";
        display.style.color= "white";
        console.log("you lose!");
    }
}

choice.forEach((choice) => {
  
    choice.addEventListener("click", ()=>{

        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);

    })
})
