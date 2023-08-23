export class NegotiationsView {
  private _elementTemplate: HTMLElement;

  constructor(selector: string) {
    this._elementTemplate = document.querySelector(selector);
  }

  insertTemplateView(): void {
    this._elementTemplate.innerHTML = this.template();
  }

  template(): string {
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
