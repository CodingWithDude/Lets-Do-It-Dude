import submitTaskForm from "./forms/submitTaskForm";

function updateTasks() {
  let taskList = submitTaskForm();

  const taskCard = document.createElement("div");
  taskCard.classList.add("taskCard");

  const title = document.createElement("p");
  title.textContent = `Title: ${taskList[0]}`;
  taskCard.appendChild(title);
  const description = document.createElement("p");
  description.textContent = `Description: ${taskList[1]}`;
  taskCard.appendChild(description);
  const dueDate = document.createElement("p");
  dueDate.textContent = `Due Date: ${taskList[2]}`;
  taskCard.appendChild(dueDate);
  const project = document.createElement("p");
  project.textContent = `Project: ${taskList[3]}`;
  taskCard.appendChild(project);

  return taskCard;
}

export default updateTasks;
