import { NegotiationController } from "./controllers/negotiation-controller.js";

const controller = new NegotiationController();
const form = document.querySelector(".form") as HTMLInputElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  controller.add();
});
