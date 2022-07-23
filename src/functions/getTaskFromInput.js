import { Task } from "../constructors/task";

const title = document.getElementById("task-title");
const dueDate = document.getElementById("due-date");

const getTaskFromInput = () => {
  const task = new Task(title.value, dueDate.value);
  title.value = "";
  return task;
};

export default getTaskFromInput;
