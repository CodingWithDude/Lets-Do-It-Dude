import getTaskFromInput from "./getTaskFromInput";
import project from "./project";
import toggleActive from "./toggleActive";

const addTaskBtn = document.getElementById("add-task-btn");
const addTaskInputContainer = document.getElementById(
  "add-task-input-container"
);

const addTask = () => {
  const newTask = getTaskFromInput();
  project.addTask(newTask);
  toggleActive(addTaskBtn, addTaskInputContainer);
  console.log(project);
};

export default addTask;
