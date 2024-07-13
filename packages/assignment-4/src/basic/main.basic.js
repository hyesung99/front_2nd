import { App } from "./src/App";

function main() {
  const appElement = document.getElementById("app");
  const app = new App();
  appElement.appendChild(app.element);
}

main();
