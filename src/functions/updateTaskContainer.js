import resetTaskContainer from "./resetTaskContainer";
import project from "./project";
import taskCardHandler from "./taskCardHandler";

const updateTaskContainer = () => {
  resetTaskContainer();
  for (let task of project.tasks) {
    taskCardHandler(task);
  }
};

export default updateTaskContainer;
