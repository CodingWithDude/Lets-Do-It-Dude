import { Task } from "../constructors/task";

const title = document.getElementById("task-title");

const getTaskFromInput = () => {
  const task = new Task(title.value);
  title.value = "";
  return task;
};

export default getTaskFromInput;
