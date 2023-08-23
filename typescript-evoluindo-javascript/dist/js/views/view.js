export class View {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }
    update(model) {
        const template = this.template(model);
        this._element.innerHTML = template;
    }
    template(model) {
        throw Error("Class children need implement the method template");
    }
}
