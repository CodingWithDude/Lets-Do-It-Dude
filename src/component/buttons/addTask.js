function addTask() {
  // Task Text
  const addTask = document.createElement("button");
  addTask.classList.add("addTask");
  addTask.textContent = "+ Add Task";

  return addTask;
}

export default addTask;
