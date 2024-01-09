let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScoreCard = document.querySelector("#user-score");
let compScoreCard = document.querySelector("#comp-score");

const drawMatch = () => {
  msg.innerHTML = "Match draw, Try again..";
  msg.style.backgroundColor = "#171033";
};

const playGame = () => {
  const compset = ["rock", "paper", "scissor"];
  const idx = Math.floor(Math.random() * 3);
  compChoiceShow(idx);
  return compset[idx];
};

const checkWinner = (userChoice, compChoice) => {
  if (userChoice === compChoice) {
    drawMatch();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    if (userWin) {
      msg.innerText = `You win, Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
      userScore++;
      userScoreCard.innerText = userScore;
    } else {
      msg.innerText = `You Lose, ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
      compScore++;
      compScoreCard.innerText = compScore;
    }
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    let compChoice = playGame();
    checkWinner(userChoice, compChoice);
  });
});

const comp_choices = document.querySelectorAll(".compchoice");
const compChoiceShow = (index) => {
  comp_choices.forEach((choice) => {
    choice.classList.add("hide");
  });
  comp_choices[index + 1].classList.remove("hide");
};
