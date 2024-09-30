
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const resetButton=document.querySelector("#reset-button");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "yellow";
  msg.style.color="black";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color="white";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color="white";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // computer  left choices are -> scissors or paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // computer left choices are -> rock or scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // comp left choices are -> rock or paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});


const resetGame=()=>{
  userScore=0;
  compScore=0;
  userScorePara.innerText="0";
  compScorePara.innerText="0";
  msg.innerText="Play your move";
  msg.style.backgroundColor="#351d05cb";
  msg.style.color="whitesmoke";
  

}
resetButton.addEventListener("click",resetGame);


