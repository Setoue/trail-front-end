import { Negotiation } from "./negotiation.js";

export class Negotiations {
  private negotiations: Array<Negotiation> = [];

  addNegotiation(negotiation: Negotiation): void {
    this.negotiations = [...this.negotiations, negotiation];
  }

  listNegotiations(): Array<Negotiation> {
    return this.negotiations;
  }
}
