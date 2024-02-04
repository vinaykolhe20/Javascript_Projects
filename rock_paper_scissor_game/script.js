let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")

const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")

const userBack=document.querySelector("#user_score")
const compBack=document.querySelector("#comScore")
//to get computer random choice between rock,paper,scissor :: 
const getComputerChoice=() =>{
    const options=["rock","paper","scissor"]
    //rock,paper,scissors
    const ranidx=Math.floor(Math.random()*3);
    // console.log(ranidx);
    return options[ranidx];
}
const drawGame=()=>{
    console.log("Game was Draw");
    msg.innerText="Game was Draw Play Again";
    msg.style.backgroundColor="black";

}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        userBack.style.backgroundColor="green";
        compBack.style.backgroundColor="red";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Loose! ${compChoice} beats your ${userChoice}`;
        compBack.style.backgroundColor="green";
        userBack.style.backgroundColor="red";
        msg.style.backgroundColor="red";

    }
}

const playGame = (userChoice) =>{
    console.log("user choice: ",userChoice);
    compChoice=getComputerChoice();
    console.log("computer choice : ",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //now as here user choice is rock computer choice cannot be rock as this condition is already 
            //checked in above block
            //paper,scissor
            //if computer choice is rock then userWin will be false and if user choice is scissors user wins
            userWin=compChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissor" ? false:true;
        }
        else{
            //user choice scissors
            //and computer choice would be rock,paper
            userWin=compChoice==="rock" ? false:true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
}


//to get user choice
choices.forEach((choice) =>{
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});