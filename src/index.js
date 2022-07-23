// CSS Import
import reset from "./styles/reset.css";
import css from "./styles/main.css";

// Constructors
import { Project } from "./constructors/project";
import hambugerListner from "./functions/hamburgerListener";
import addTaskBtnListener from "./functions/addTaskBtnListener";
import addTaskAddBtnListener from "./functions/addTaskAddBtnListener";
import addTaskCancelBtnListener from "./functions/addTaskCancelListener";
import toggleActive from "./functions/toggleActive";

const project = new Project("inbox");
