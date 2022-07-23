import inbox from "./inbox";
import updateTaskContainer from "./updateTaskContainer";

const newTaskCard = (task) => {
  const taskContainer = document.getElementById("task-container");

  const taskCard = document.createElement("div");
  const taskInfo = document.createElement("div");
  const title = document.createElement("p");
  const dueDate = document.createElement("p");

  const buttonContainer = document.createElement("div");
  const removeBtn = document.createElement("button");

  taskCard.classList.add("task-card");
  taskInfo.classList.add("task-info");
  buttonContainer.classList.add("buttonContainer");
  removeBtn.classList.add("removeBtn");

  title.textContent = `${task.title}`;
  dueDate.textContent = `${task.dueDate}`;
  removeBtn.textContent = "X";

  removeBtn.onclick = removeTaskCard;

  taskInfo.appendChild(title);
  taskInfo.appendChild(dueDate);
  taskCard.appendChild(taskInfo);
  taskCard.appendChild(buttonContainer);
  buttonContainer.appendChild(removeBtn);
  taskContainer.appendChild(taskCard);
};

const removeTaskCard = (e) => {
  const taskTitle =
    e.target.parentNode.parentNode.firstChild.firstChild.innerHTML.replaceAll(
      '"',
      ""
    );
  inbox.removeTask(taskTitle);
  updateTaskContainer();
  console.log(inbox);
};

export default newTaskCard;
