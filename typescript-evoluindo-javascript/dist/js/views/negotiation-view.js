export class NegotiationsView {
    constructor(selector, _negotiations) {
        this._negotiations = _negotiations;
        this._elementTemplate = document.querySelector(selector);
    }
    insertTemplateView(negotiations) {
        this._elementTemplate.innerHTML = this.template(negotiations);
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
