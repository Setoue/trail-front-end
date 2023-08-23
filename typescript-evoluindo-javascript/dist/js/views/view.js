export class View {
    constructor(selector, toEscape) {
        this._element = document.querySelector(selector);
    }
    update(model) {
        let template = this.template(model);
        if (this.toEscape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this._element.innerHTML = template;
    }
}
