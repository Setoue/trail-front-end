import { View } from "./view.js";
export class NegotiationsView extends View {
    insertTemplateView(negotiations) {
        this._element.innerHTML = this.template(negotiations);
    }
    template(negotiations) {
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
                        <td>${new Intl.DateTimeFormat().format(negotiation.data)}</td>
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
