// CSS Import
import reset from "./styles/reset.css";
import css from "./styles/main.css";

// Task Class
class Task {
  constructor(title = "Unknown") {
    this.title = title;
  }
}

// Project Class
class Project {
  constructor(project = "Unknown") {
    this.project = project;
    this.tasks = [];
  }

  addTask(newTask) {
    if (!this.inProject(newTask)) {
      this.tasks.push(newTask);
    }
  }

  removeTask(title) {
    this.tasks = this.tasks.filter((task) => task.title !== title);
  }

  getTask(title) {
    return this.tasks.find((task) => task.title === title);
  }

  inProject(newTask) {
    return this.tasks.some((task) => task.title === newTask.title);
  }
}

const inbox = new Project("inbox");

// User Interface
const inboxSection = document.getElementById("inboxSection");
const addTaskBtn = document.getElementById("addTaskBtn");
const addTaskForm = document.getElementById("addTaskForm");
const confirmAdd = document.getElementById("confirmAdd");
const cancelAdd = document.getElementById("cancelAdd");
const taskInput = document.getElementById("taskInput");

addTaskBtn.onclick = () => {
  taskInput.value = "";
  // Hide Add Task Button
  addTaskBtn.classList.add("inactive");
  addTaskBtn.classList.remove("active");
  //   Show Add Task Form
  addTaskForm.classList.remove("inactive");
  addTaskForm.classList.add("active");
};

confirmAdd.onclick = () => {
  const newTask = getTaskFromInput();
  inbox.addTask(newTask);
  updateTaskList();
  // Hide Add Task Button
  addTaskBtn.classList.remove("inactive");
  addTaskBtn.classList.add("active");
  //   Show Add Task Form
  addTaskForm.classList.add("inactive");
  addTaskForm.classList.remove("active");
};

cancelAdd.onclick = () => {
  // Hide Add Task Button
  addTaskBtn.classList.remove("inactive");
  addTaskBtn.classList.add("active");
  //   Show Add Task Form
  addTaskForm.classList.add("inactive");
  addTaskForm.classList.remove("active");
};

const getTaskFromInput = () => {
  const title = document.getElementById("taskInput");

  const task = new Task(title.value);

  return task;
};

const removeTask = (e) => {
  const title = e.target.parentNode.firstChild.innerHTML.replaceAll('"', "");
  inbox.removeTask(title);
  updateTaskList();
};

const updateTaskList = () => {
  resetTaskList();
  for (let task of inbox.tasks) {
    newTaskCard(task);
  }
  console.log(inbox);
};

const resetTaskList = () => {
  inboxSection.innerHTML = "";
};

const newTaskCard = (task) => {
  const taskCard = document.createElement("div");
  const title = document.createElement("p");
  const removeBtn = document.createElement("button");

  taskCard.classList.add("taskCard");
  removeBtn.classList.add("removeBtn");

  title.textContent = `"${task.title}"`;
  removeBtn.textContent = "Remove";

  removeBtn.onclick = removeTask;

  taskCard.appendChild(title);
  taskCard.appendChild(removeBtn);
  inboxSection.appendChild(taskCard);
};
