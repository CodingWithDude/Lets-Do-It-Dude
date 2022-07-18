import addTask from "./buttons/addTask";
import addTaskForm from "./forms/addTaskForm";

function content() {
  const content = document.createElement("content");
  content.classList.add("content");

  const addTaskBtn = addTask();
  content.appendChild(addTaskBtn);

  // Listen for new task
  addTaskBtn.onclick = () => {
    console.log("click");
    content.replaceChildren();
    content.appendChild(addTaskForm());
  };

  return content;
}

export default content;
