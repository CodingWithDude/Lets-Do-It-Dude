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
  title.type = "text";
  title.value = "title";
  title.name = "title";
  title.id = "title";
  addTaskForm.appendChild(title);

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
