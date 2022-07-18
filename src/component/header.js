function header() {
  // Header Container
  const header = document.createElement("header");
  header.classList.add("header");

  // Title
  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "Lets Do It Dude";
  header.appendChild(title);

  // Return Content
  return header;
}

export default header;
