import toggleActive from "./toggleActive";

const addProjectBtn = document.getElementById("add-project-btn");
const addProjectInputContainer = document.getElementById(
  "add-project-input-container"
);

const addProjectBtnListener = addProjectBtn.addEventListener("click", () => {
  toggleActive(addProjectBtn, addProjectInputContainer);
});

export default addProjectBtnListener;
