const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

const createBoard = () => {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
};


const checkMatch = () => {
  const cards = document.querySelectorAll("img"),
    optionOneId = cardsChosen[0],
    optionTwoId = cardsChosen[1];

  if (optionOneId == optionTwoId) {
    alert("You have found a match");
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");

    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);

    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("Sorry, Try again!");
  }

  cardsChosen = [];
  cardsChosenIds = [];
  resultDisplay.textContent = cardsWon.length;

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = `
    Congratulations you found them all
    `;
  }
};

const flipCard = () => {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardArray].name);
    cardsChosenIds.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkMatch, 500);
    }
  };

createBoard();
