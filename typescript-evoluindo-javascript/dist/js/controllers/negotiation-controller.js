import { Negotiation } from "../models/negotiation.js";
export class NegotiationController {
    constructor() {
        this.inputDate = document.querySelector("#date");
        this.inputAmount = document.querySelector("#amount");
        this.inputValue = document.querySelector("#value");
    }
    add() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ","));
        const amount = parseInt(this.inputAmount.value);
        const value = parseFloat(this.inputValue.value);
        const negotiation = new Negotiation(date, amount, value);
        console.log(negotiation);
    }
}
