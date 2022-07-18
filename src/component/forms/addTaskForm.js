function addTaskForm() {
  // Form
  const addTaskForm = document.createElement("form");
  addTaskForm.classList.add("addTaskForm");

  // Inputs

  // Title
  const title = document.createElement("input");
  title.type = "text";
  title.value = "title";
  title.name = "title";
  title.id = "title";
  addTaskForm.appendChild(title);

  return addTaskForm;
}

export default addTaskForm;
