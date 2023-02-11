const tasks = [];
let time = 0;
let timer = null;
let timeBreak = null;
let current = null;

const bAdd = document.querySelector("#bAdd");
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");
const taskName = document.querySelector("#time #taskname");

renderTime();
renderTasks();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (itTask.value !== "") {
    createTask(itTask.value);
    itTask.value = "";
    renderTasks();
  }
});

function createTask(value) {
  try {
    const newTask = {
      id: (Math.random() * 100).toString(36).slice(3),
      title: value,
      completed: false,
    };
    tasks.unshift(newTask);
  } catch (error) {
    console.log(error);
  }
}

function renderTasks() {
  try {
    const html = tasks.map((task) => {
      return `
            <div class="task">
                <div class="completed"> ${
                  task.completed
                    ? `<span class="done"> Done </span>`
                    : `<button class="start_button" data-id="${task.id}"> Start </button>`
                }</div>
                <div class="title">${task.title}</div>
            </div>
            `;
    });

    const taskContainer = document.querySelector("#tasks");
    taskContainer.innerHTML = html.join("");

    const startButtons = document.querySelectorAll(".task .start_button");
    console.log(startButtons);
    startButtons.forEach((startButton) => {
      startButton.addEventListener("click", () => {
        if (!timer) {
          const id = startButton.getAttribute("data-id");
          startButton.textContent = "In progress ...";
          startButtonHandler(id);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
}

function startButtonHandler(id) {
  try {
    time = 25 * 60;
    current = id;
    const taskIndex = tasks.findIndex((task) => task.id === id);
    taskName.textContent = tasks[taskIndex].title;
    renderTime();
    timer = setInterval(() => {
      timeHandler(id);
    }, 1000);
  } catch (error) {
    console.log(error);
  }
}

function timeHandler(id) {
  try {
    time--;
    renderTime();

    if (time === 0) {
      clearInterval(timer);
      markCompleted(id);
      timer = null;
      renderTasks();
      startBrake();
    }
  } catch (error) {
    console.log(error);
  }
}

function renderTime() {
  try {
    const timeDiv = document.querySelector("#time #value");
    const minutes = parseInt(time / 60);
    const seconds = parseInt(time % 60);

    timeDiv.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  } catch (error) {}
}

function markCompleted(id) {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  tasks[taskIndex].completed = true;
}

function startBrake() {
  time = 5 * 60;
  taskName.textContent = "Break";
  renderTime();
  timeBreak = setInterval(() => {
    timeBreakHandler();
  }, 1000);
}

function timeBreakHandler() {
  timer--;
  renderTime();

  if (time === 0) {
    clearInterval(timeBreak);
    current = null;
    timeBreak = null;
    taskName.textContent = "";
    renderTasks();
  }
}
