import addTaskInputHandler from "./addTaskInputHandler";

const addTaskAddBtn = document.getElementById("add-task-add-btn");

const addTaskAddBtnListener = addTaskAddBtn.addEventListener("click", () => {
  addTaskInputHandler();
});

export default addTaskAddBtnListener;
