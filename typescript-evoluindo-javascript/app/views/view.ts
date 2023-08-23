export abstract class View<T> {
  protected _element: HTMLElement;
  private toEscape = false;
  constructor(selector: string, toEscape?: boolean) {
    toEscape ? (this.toEscape = toEscape) : undefined;
    this._element = document.querySelector(selector);
  }

  public update(model: T): void {
    let template = this.template(model);
    if (this.toEscape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this._element.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
