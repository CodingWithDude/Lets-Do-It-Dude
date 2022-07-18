import addTask from "./buttons/addTask";

function content() {
  const content = document.createElement("content");
  content.classList.add("content");
  content.appendChild(addTask());

  return content;
}

export default content;
