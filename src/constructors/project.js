// Project Class
export class Project {
  constructor(title = "Unknown") {
    this.title = title;
    this.tasks = [];
  }

  addTask(newTask) {
    if (!this.inProject(newTask)) {
      this.tasks.push(newTask);
    }
  }

  removeTask(title) {
    this.tasks = this.tasks.filter((task) => task.title !== title);
  }

  getTask(title) {
    return this.tasks.find((task) => task.title === title);
  }

  inProject(newTask) {
    return this.tasks.some((task) => task.title === newTask.title);
  }
}
