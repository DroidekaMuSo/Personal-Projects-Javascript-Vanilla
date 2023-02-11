const colors = ["green", "red", "rgba(133,122,200", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  //Get random number between zero and three
  const randomNumber = getRandomNumber();
  console.log(randomNumber,colors.length)
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

const getRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * colors.length);
  return randomNumber
};
