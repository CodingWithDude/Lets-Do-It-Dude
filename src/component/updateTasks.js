import submitTaskForm from "./forms/submitTaskForm";

function updateTasks() {
  let taskList = submitTaskForm();

  const taskDisplay = document.createElement("div");

  const title = document.createElement("p");
  title.textContent = `Title: ${taskList[0]}`;
  taskDisplay.appendChild(title);
  const description = document.createElement("p");
  description.textContent = `Description: ${taskList[1]}`;
  taskDisplay.appendChild(description);
  const dueDate = document.createElement("p");
  dueDate.textContent = `Due Date: ${taskList[2]}`;
  taskDisplay.appendChild(dueDate);
  const project = document.createElement("p");
  project.textContent = `Project: ${taskList[3]}`;
  taskDisplay.appendChild(project);

  return taskDisplay;
}

export default updateTasks;
