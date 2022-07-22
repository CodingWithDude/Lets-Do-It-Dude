// CSS Import
import reset from "./styles/reset.css";
import css from "./styles/main.css";

// Constructors
import { Project } from "./constructors/project";
import getTaskFromInput from "./functions/getTaskFromInput";
import toggleActive from "./functions/toggleActive";

const project = new Project("inbox");

// User Interface

// Nav
const inboxNav = document.getElementById("inboxNav");
const todayNav = document.getElementById("inboxNav");
const thisWeekNav = document.getElementById("inboxNav");
const projectList = document.getElementById("projectList");
const addProjectBtn = document.getElementById("addProjectBtn");

// Content
const content = document.getElementById("content");
const addTaskBtn = document.getElementById("addTaskBtn");
const addTaskForm = document.getElementById("addTaskForm");
const confirmAdd = document.getElementById("confirmAdd");
const cancelAdd = document.getElementById("cancelAdd");
const taskInput = document.getElementById("taskInput");

// Add Task Click
addTaskBtn.onclick = () => {
  taskInput.value = "";
  toggleActive(addTaskBtn, addTaskForm);
};

// Confirm Add Click
confirmAdd.onclick = () => {
  const newTask = getTaskFromInput();
  project.addTask(newTask);
  updateTaskList();
  toggleActive(addTaskBtn, addTaskForm);
};

// Cancel Click
cancelAdd.onclick = () => {
  toggleActive(addTaskBtn, addTaskForm);
};

// Update Task List
const updateTaskList = () => {
  resetTaskList();
  for (let task of project.tasks) {
    newTaskCard(task);
  }
};

// Reset Task List
const resetTaskList = () => {
  content.innerHTML = "";
};

// New Task Card
const newTaskCard = (task) => {
  const taskCard = document.createElement("div");
  const title = document.createElement("p");
  const removeBtn = document.createElement("button");
  const dueDate = document.createElement("button");
  const dueDateInput = document.createElement("input");

  taskCard.classList.add("taskCard");
  removeBtn.classList.add("removeBtn");

  dueDate.classList.add("dueDate");
  dueDate.classList.add("active");
  dueDate.textContent = task.dueDate;

  dueDateInput.classList.add("dueDate");
  dueDateInput.classList.add("inactive");
  dueDateInput.type = "date";

  title.textContent = `"${task.title}"`;
  removeBtn.textContent = "Remove";

  removeBtn.onclick = (e) => {
    const title = e.target.parentNode.firstChild.innerHTML.replaceAll('"', "");
    project.removeTask(title);
    updateTaskList();
  };

  dueDate.onclick = () => {
    toggleActive(dueDate, dueDateInput);
    console.log(dueDateInput.value);
  };

  dueDateInput.onchange = () => {
    task.dueDate = dueDateInput.value;
    dueDate.textContent = dueDateInput.value;
    updateTaskList();
    toggleActive(dueDate, dueDateInput);
  };

  taskCard.appendChild(title);
  taskCard.appendChild(dueDate);
  taskCard.appendChild(dueDateInput);
  taskCard.appendChild(removeBtn);
  content.appendChild(taskCard);
};
