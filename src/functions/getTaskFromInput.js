// Constructors
import { Task } from "../constructors/task";

function getTaskFromInput() {
  const title = document.getElementById("taskInput");

  const task = new Task(title.value);

  return task;
}

export default getTaskFromInput;
