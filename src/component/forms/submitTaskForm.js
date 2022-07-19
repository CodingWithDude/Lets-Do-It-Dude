function submitTaskForm() {
  let title = document.getElementById("titleInput").value;
  let details = document.getElementById("detailsInput").value;
  let dueDate = document.getElementById("dueDateInput").value;
  let project = document.getElementById("projectInput").value;
  let task = [title, details, dueDate, project];
  return task;
}

export default submitTaskForm;
