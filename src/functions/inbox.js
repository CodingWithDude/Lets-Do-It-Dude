import { Project } from "../constructors/project";
import { Projects } from "../constructors/projects";

const projects = new Projects("projects");
const inbox = new Project("inbox");
projects.addProject(inbox);
console.log(projects);

export default inbox;
