import { Negotiations } from "../models/negotiations.js";

export class NegotiationsView {
  private _elementTemplate: HTMLElement;

  constructor(selector: string, private _negotiations: Negotiations) {
    this._elementTemplate = document.querySelector(selector);
  }

  insertTemplateView(negotiations: Negotiations): void {
    this._elementTemplate.innerHTML = this.template(negotiations);
  }

  template(negotiations: Negotiations): string {
    return `
    
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                ${negotiations
                  .listNegotiations()
                  .map((negotiation) => {
                    return `
                    <tr>
                        <td>${negotiation.data}</td>
                        <td>${negotiation.amount}</td>
                        <td>${negotiation.value}</td>
                    </tr>`;
                  })
                  .join("")}
            </tbody>
        </table>
    `;
  }
}
