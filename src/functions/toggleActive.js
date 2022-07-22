function toggleActive(...args) {
  for (let arg of args) {
    arg.classList.toggle("inactive");
    arg.classList.toggle("active");
  }
}

export default toggleActive;
