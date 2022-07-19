function addTaskForm() {
  // Form Container
  const addTaskFormContainer = document.createElement("div");
  addTaskFormContainer.classList.add("addTaskFormContainer");

  // Form
  const addTaskForm = document.createElement("form");
  addTaskForm.classList.add("addTaskForm");
  addTaskFormContainer.appendChild(addTaskForm);

  // Inputs

  // Title
  const title = document.createElement("input");
  title.classList.add("titleInput");
  title.type = "text";
  title.placeholder = "title";
  title.name = "title";
  title.id = "titleInput";
  addTaskForm.appendChild(title);

  // Details

  const details = document.createElement("textarea");
  details.classList.add("detailsInput");
  details.rows = "4";
  details.cols = "50";
  details.placeholder = "details";
  details.name = "details";
  details.id = "detailsInput";
  addTaskForm.appendChild(details);

  // Due Date

  const dueDate = document.createElement("input");
  details.classList.add("dueDateInput");
  dueDate.type = "date";
  dueDate.id = "dueDateInput";
  addTaskForm.appendChild(dueDate);

  // Project
  const project = document.createElement("input");
  project.classList.add("projectInput");
  project.type = "text";
  project.placeholder = "project";
  project.name = "project";
  project.id = "projectInput";
  addTaskForm.appendChild(project);

  // Button Container
  const addTaskFormButtonContainer = document.createElement("div");
  addTaskFormButtonContainer.classList.add("addTaskFormButtonContainer");
  addTaskForm.appendChild(addTaskFormButtonContainer);

  // Submit Button
  const addTaskFormSubmit = document.createElement("input");
  addTaskFormSubmit.classList.add("addTaskFormSubmit");
  addTaskFormSubmit.type = "submit";
  addTaskFormSubmit.value = "submit";
  addTaskFormSubmit.id = "submit";
  addTaskFormButtonContainer.appendChild(addTaskFormSubmit);

  // Cancel Button
  // const addTaskFormCancel = document.createElement("button");
  // addTaskFormCancel.classList.add("addTaskFormCancel");
  // addTaskFormCancel.textContent = "Cancel";
  // addTaskFormButtonContainer.appendChild(addTaskFormCancel);

  return addTaskForm;
}

export default addTaskForm;
