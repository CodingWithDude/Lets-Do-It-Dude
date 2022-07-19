import submitTaskForm from "./forms/submitTaskForm";

function updateTasks() {
  let taskList = submitTaskForm();
  const taskDisplay = document.createElement("p");
  taskDisplay.textContent = taskList;
  return taskDisplay;
}

export default updateTasks;
