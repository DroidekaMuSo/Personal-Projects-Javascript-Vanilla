const grid = document.querySelector(".grid"),
  blockWidth = 120,
  blockHeight = 20,
  userStart = [230, 10],
  ballStart = [270, 40];

let currentPosition = userStart,
  ballCurrentPosition = ballStart,
  timerId;

//create block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidthck, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}

const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];

const addBlocks = () => {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.getElementsByClassName.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = block[i].bottomLeft[1] + "px";
    grid.appendChild(block);
  }
};

addBlocks();

//add user
const user = document.createElement("div");
user.classList.add("user");
drawUser();
user.style.grid.appendChild(user);

const drawUser = () => {
  user.style.left = currentPosition[0] + "px";
  user.style.bottom = currentPosition[1] + "px";
};

const drawBall = () => {
  ball.style.left = ballCurrentPosition[0] + "px";
  ball.style.bottom = ballCurrentPosition[1] + "px";
};

//move user
const moveUser = (e) => {
  switch (e.key) {
    case "ArrowLeft":
      currentPosition[0] -= 10;
      drawUser();
      break;

    default:
      break;
  }
};

document.addEventListener("keydown", moveUser);

//create ball
const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.appendChild(ball);

//move the ball
const moveBall = () => {
  ballCurrentPosition[0] += 2;
  ballCurrentPosition[1] += 2;
  drawBall();
};

timerId = setInterval(moveBall, 30);
