// Projects Class
export class Projects {
  constructor(title = "Unknown") {
    this.title = title;
    this.projects = [];
  }

  addProject(newProject) {
    if (!this.inProjects(newProject)) {
      this.projects.push(newProject);
    }
  }

  removeProject(title) {
    this.projects = this.projects.filter((project) => project.title !== title);
  }

  getProject(title) {
    return this.projects.find((project) => project.title === title);
  }

  inProjects(newProject) {
    return this.projects.some((project) => project.title === newProject.title);
  }
}
