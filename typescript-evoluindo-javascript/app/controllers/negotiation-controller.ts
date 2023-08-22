import { Negotiation } from "../models/negotiation.js";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputValue: HTMLInputElement;

  constructor() {
    this.inputDate = document.querySelector("#date");
    this.inputAmount = document.querySelector("#amount");
    this.inputValue = document.querySelector("#value");
  }

  add(): void {
    const negotiation = this.createNegotiation();

    console.log(negotiation);
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
