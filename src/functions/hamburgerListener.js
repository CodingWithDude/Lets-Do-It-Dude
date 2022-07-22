const hamburger = document.getElementById("hamburger");
const headerNavUl = document.getElementById("header-nav-ul");

const hambugerListner = hamburger.addEventListener("click", () => {
  headerNavUl.classList.toggle("show");
});

export default hambugerListner;
