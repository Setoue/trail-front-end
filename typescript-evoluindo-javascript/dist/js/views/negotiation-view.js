export class NegotiationsView {
    constructor(selector) {
        this._elementTemplate = document.querySelector(selector);
    }
    insertTemplateView() {
        this._elementTemplate.innerHTML = this.template();
    }
    template() {
        return `
    
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Value</th>
                </r>
            </thead>
            <tbody>
            </tbody>
        </table>
    `;
    }
}
