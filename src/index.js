// CSS Import
import reset from "./styles/reset.css";
import css from "./styles/main.css";

import header from "./component/header";
import sidebar from "./component/sidebar";
import footer from "./component/footer";
import footerScript from "./scripts/footerScript";

// Head
const head = document.head;

// Body
const body = document.body;

// Main Container
const mainContainer = document.createElement("div");
mainContainer.classList.add("mainContainer");
body.appendChild(mainContainer);

// Header
mainContainer.appendChild(header());

// Sidebar
mainContainer.appendChild(sidebar());

// Footer
mainContainer.appendChild(footer());
head.appendChild(footerScript());
