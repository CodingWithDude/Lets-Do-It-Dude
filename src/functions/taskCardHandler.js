import project from "./project";
import updateTaskContainer from "./updateTaskContainer";

const taskContainer = document.getElementById("task-container");

const taskCard = document.createElement("div");
const title = document.createElement("p");

const buttonContainer = document.createElement("div");
const removeBtn = document.createElement("button");

const newTaskCard = (task) => {
  taskCard.classList.add("book-card");
  buttonContainer.classList.add("buttonContainer");
  removeBtn.classList.add("removeBtn");

  title.textContent = `"${task.title}"`;
  removeBtn.textContent = "Remove";

  removeBtn.onclick = removeTaskCard;

  taskCard.appendChild(title);
  taskCard.appendChild(buttonContainer);
  buttonContainer.appendChild(removeBtn);
  taskContainer.appendChild(taskCard);
};

const removeTaskCard = (e) => {
  const taskTitle =
    e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll('"', "");
  project.removeTask(taskTitle);
  updateTaskContainer();
  console.log(project);
};

export default newTaskCard;
