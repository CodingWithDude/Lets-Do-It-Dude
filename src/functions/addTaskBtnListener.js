import toggleActive from "./toggleActive";
import getDate from "./getDate";

const addTaskBtn = document.getElementById("add-task-btn");
const addTaskInputContainer = document.getElementById(
  "add-task-input-container"
);

const dueDate = document.getElementById("due-date");

const addTaskBtnListener = addTaskBtn.addEventListener("click", () => {
  dueDate.value = getDate();
  toggleActive(addTaskBtn, addTaskInputContainer);
});

export default addTaskBtnListener;
