function footerScript() {
  const footerScriptInject = document.createElement("script");
  footerScriptInject.src = "https://kit.fontawesome.com/aa27ee4dff.js";
  footerScriptInject.crossOrigin = "anonymous";

  return footerScriptInject;
}

export default footerScript;
