import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { NegotiationsView } from "../views/negotiation-view.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView("#templateView");
        this.inputDate = document.querySelector("#date");
        this.inputAmount = document.querySelector("#amount");
        this.inputValue = document.querySelector("#value");
        this.negotiationsView.insertTemplateView();
    }
    add() {
        const negotiation = this.createNegotiation();
        this.negotiations.addNegotiation(negotiation);
        console.log(this.negotiations.listNegotiations());
        this.clearForms();
    }
    createNegotiation() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ","));
        const amount = parseInt(this.inputAmount.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, amount, value);
    }
    clearForms() {
        this.inputAmount.value = "";
        this.inputDate.value = "";
        this.inputValue.value = "";
        this.inputDate.focus();
    }
}
