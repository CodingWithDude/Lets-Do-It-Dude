import toggleActive from "./toggleActive";

const addTaskCancelBtn = document.getElementById("add-task-cancel-btn");
const addTaskBtn = document.getElementById("add-task-btn");
const addTaskInputContainer = document.getElementById(
  "add-task-input-container"
);
const title = document.getElementById("task-title");

const addTaskCancelBtnListener = addTaskCancelBtn.addEventListener(
  "click",
  () => {
    title.value = "";
    toggleActive(addTaskBtn, addTaskInputContainer);
  }
);

export default addTaskCancelBtnListener;
