function footer() {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.innerHTML = `<p>
    Copyright ©
    <script>
      document.write(new Date().getFullYear());
    </script>
    CodingWithDude
    </p>
    <a href="https://github.com/codingwithdude" target="_blank">
    <i class="fab fa-github"></i
    ></a>`;

  return footer;
}

export default footer;
