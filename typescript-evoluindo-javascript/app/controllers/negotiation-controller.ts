import { Negotiation } from "../models/negotiation.js";

export class NegotiationController {
  private inputDate;
  private inputAmount;
  private inputValue;

  constructor() {
    this.inputDate = document.querySelector("#date");
    this.inputAmount = document.querySelector("#amount");
    this.inputValue = document.querySelector("#value");
  }

  add() {
    const negotiation = new Negotiation(
      this.inputDate.value,
      this.inputAmount.value,
      this.inputValue.value
    );

    console.log(negotiation);
  }
}
