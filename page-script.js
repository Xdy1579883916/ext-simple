(() => {
  document.addEventListener("customLoader", customLoader, false);
  function customLoader(event) {
    console.log("customLoader", event);
    const scriptDom = document.createElement("script");
    scriptDom.setAttribute("type", "module");
    scriptDom.text = event.detail;
    document.head.appendChild(scriptDom);
    scriptDom.onload = () => {
      console.log(scriptDom);
      scriptDom.remove();
    };
  }
})();
