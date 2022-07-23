import resetTaskContainer from "./resetTaskContainer";
import project from "./project";
import newTaskCard from "./newTaskCard";

const updateTaskContainer = () => {
  resetTaskContainer();
  for (let task of project.tasks) {
    newTaskCard(task);
  }
};

export default updateTaskContainer;
