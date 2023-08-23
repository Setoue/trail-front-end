import { View } from "./view.js";
export class MessageView extends View {
    templateMessage(message) {
        return `
        <p class="alert alert-info">${message}</p>
    `;
    }
    update(message) {
        const template = this.templateMessage(message);
        this._element.innerHTML = template;
    }
}
