import addTask from "./buttons/addTask";
import addTaskForm from "./forms/addTaskForm";
import updateTasks from "./updateTasks";

function content() {
  const content = document.createElement("div");
  content.classList.add("content");

  //   Add task and form container
  const taskAndFormContainer = document.createElement("div");
  taskAndFormContainer.classList.add("taskAndFormContainer");
  content.appendChild(taskAndFormContainer);

  //   Current tasks container
  const currentTasksContainer = document.createElement("div");
  currentTasksContainer.classList.add("currentTasksContainer");
  content.appendChild(currentTasksContainer);

  //   Add new task
  const addTaskBtn = addTask();
  taskAndFormContainer.appendChild(addTaskBtn);

  //   Add new task form
  const addTaskFormBtn = addTaskForm();

  // Listen for new task
  addTaskBtn.onclick = () => {
    console.log("click");
    taskAndFormContainer.replaceChildren();
    taskAndFormContainer.appendChild(addTaskFormBtn);

    // Listen for submit
    addTaskFormBtn.addEventListener("submit", (e) => {
      e.preventDefault();
      currentTasksContainer.appendChild(updateTasks());
      taskAndFormContainer.replaceChildren();
      taskAndFormContainer.appendChild(addTaskBtn);
    });
  };

  return content;
}

export default content;
