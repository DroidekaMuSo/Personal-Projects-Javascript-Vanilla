const computerChoiceDisplay = document.getElementById("computer-choice"),
  userChoiceDisplay = document.getElementById("user-choice"),
  resultDisplay = document.getElementById("result"),
  possibleChoices = document.querySelectorAll("button");
let userChoice, computerChoice, result;

possibleChoices.forEach((possibleChoice) => {
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    console.log(userChoice);
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();
    getResult();
  });
});

const generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);

  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }

  computerChoiceDisplay.innerHTML = computerChoice;
};

const getResult = () => {
  if (computerChoice === userChoice) {
    result = `It's a draw`;
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = `You win!`;
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = `You lose!`;
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = `You win!`;
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = `You lose!`;
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = `You win!`;
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = `You lose!`;
  }
  resultDisplay.innerHTML = result;
};
