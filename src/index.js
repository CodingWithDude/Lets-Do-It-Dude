// CSS Import
import reset from "./styles/reset.css";
import css from "./styles/main.css";

import header from "./component/header";
import sidebar from "./component/sidebar";
import footer from "./component/footer";
import footerScript from "./scripts/footerScript";
import content from "./component/content";

// Head
const head = document.head;

// Body
const body = document.body;

// Header
body.appendChild(header());

// Sidebar
body.appendChild(sidebar());

// Content
body.appendChild(content());

// Footer
body.appendChild(footer());
head.appendChild(footerScript());
