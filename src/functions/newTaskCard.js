const newTaskCard = (task) => {
  const taskContainer = document.getElementById("task-container");

  const taskCard = document.createElement("div");
  const title = document.createElement("p");

  const buttonContainer = document.createElement("div");
  const removeBtn = document.createElement("button");

  taskCard.classList.add("book-card");
  buttonContainer.classList.add("buttonContainer");
  removeBtn.classList.add("removeBtn");

  title.textContent = `"${task.title}"`;
  removeBtn.textContent = "Remove";

  taskCard.appendChild(title);
  taskCard.appendChild(buttonContainer);
  buttonContainer.appendChild(removeBtn);
  taskContainer.appendChild(taskCard);
};

export default newTaskCard;
