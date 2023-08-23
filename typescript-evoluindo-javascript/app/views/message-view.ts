import { View } from "./view.js";

export class MessageView extends View {
  templateMessage(message: string): string {
    return `
        <p class="alert alert-info">${message}</p>
    `;
  }

  update(message: string): void {
    const template = this.templateMessage(message);
    this._element.innerHTML = template;
  }
}
