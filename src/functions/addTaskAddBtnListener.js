import addTask from "./addTask";

const addTaskAddBtn = document.getElementById("add-task-add-btn");

const addTaskAddBtnListener = addTaskAddBtn.addEventListener("click", () => {
  addTask();
});

export default addTaskAddBtnListener;
