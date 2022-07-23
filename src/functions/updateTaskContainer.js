import resetTaskContainer from "./resetTaskContainer";
import inbox from "./inbox";
import taskCardHandler from "./taskCardHandler";

const updateTaskContainer = () => {
  resetTaskContainer();
  for (let task of inbox.tasks) {
    taskCardHandler(task);
  }
};

export default updateTaskContainer;
