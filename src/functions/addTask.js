import getTaskFromInput from "./getTaskFromInput";
import inbox from "./inbox";
import toggleActive from "./toggleActive";
import updateTaskContainer from "./updateTaskContainer";

const addTaskBtn = document.getElementById("add-task-btn");
const addTaskInputContainer = document.getElementById(
  "add-task-input-container"
);

const addTask = () => {
  const newTask = getTaskFromInput();
  inbox.addTask(newTask);
  toggleActive(addTaskBtn, addTaskInputContainer);
  updateTaskContainer();
};

export default addTask;
