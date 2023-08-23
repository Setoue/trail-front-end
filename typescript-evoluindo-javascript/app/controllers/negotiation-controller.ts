import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiation-view.js";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negotiations: Negotiations = new Negotiations();
  private negotiationsView = new NegotiationsView("#templateView");
  private messageView = new MessageView("#messageView");

  constructor() {
    this.inputDate = document.querySelector("#date");
    this.inputAmount = document.querySelector("#amount");
    this.inputValue = document.querySelector("#value");
    this.negotiationsView.insertTemplateView(this.negotiations);
  }

  add(): void {
    const negotiation = this.createNegotiation();

    this.negotiations.addNegotiation(negotiation);
    this.negotiationsView.insertTemplateView(this.negotiations);
    this.messageView.update("Negotiation added success");

    this.clearForms();
  }

  createNegotiation(): Negotiation {
    const exp = /-/g;

    const date = new Date(this.inputDate.value.replace(exp, ","));
    const amount = parseInt(this.inputAmount.value);
    const value = parseFloat(this.inputValue.value);

    return new Negotiation(date, amount, value);
  }

  clearForms(): void {
    this.inputAmount.value = "";
    this.inputDate.value = "";
    this.inputValue.value = "";
    this.inputDate.focus();
  }
}
