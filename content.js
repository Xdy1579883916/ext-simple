console.log("hello world content todo something~");

function injectPageScript(src) {
  const script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", src);
  document.head.appendChild(script);

  script.onload = () => {
    script.remove();
  };
}

injectPageScript(chrome.runtime.getURL("page-script.js"));

setTimeout(async () => {
  /*const cssList = [
      "http://localhost:5273/assets/theme.css",
      "http://localhost:5273/assets/content.css",
    ];
    for (const cssLink of cssList) {
      const link = document.createElement("link");
      link.href = cssLink;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }*/

  /*const scriptURLList = ["http://localhost:5273/assets/content.js"];

    for (const scriptURL of scriptURLList) {
      const scriptStr = await fetch(scriptURL).then((r) => r.text());
      document.dispatchEvent(
        new CustomEvent("customLoader", {
          detail: scriptStr,
        })
      );
    }*/

  document.dispatchEvent(
    new CustomEvent("customLoader", {
      detail:
        "(() => {const a = document.createElement('div');a.innerHTML = 'abc'; a.id = 'script_str';document.body.appendChild(a); window.abc = 'hello ext'})()",
    })
  );
}, 500);
