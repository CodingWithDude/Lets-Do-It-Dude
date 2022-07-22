import toggleActive from "./toggleActive";

const addTaskBtn = document.getElementById("add-task-btn");
const addTaskInputContainer = document.getElementById(
  "add-task-input-container"
);

const addTaskBtnListener = addTaskBtn.addEventListener("click", () => {
  toggleActive(addTaskBtn, addTaskInputContainer);
});

export default addTaskBtnListener;
