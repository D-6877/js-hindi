
const buttons = document.querySelectorAll(".button");  


const body = document.querySelector("body");


buttons.forEach(function (button){
    button.addEventListener('click' ,function(e){    // here click event is perform
        console.log(e);
        console.log(e.target);  // print the target after click the button

        if(e.target.id === "green"){              // target green
            body.style.backgroundColor = "green";
        }
        if(e.target.id === "red"){              // target red
            body.style.backgroundColor = "red";
        }
        if(e.target.id === "blue"){              // target blue
            body.style.backgroundColor = "blue";
        }
        if(e.target.id === "yellow"){              // target yellow
            body.style.backgroundColor = "yellow";
        }

        if(e.target.id === "purple"){              // target yellow
            body.style.backgroundColor = "purple";
        }
    })
});


