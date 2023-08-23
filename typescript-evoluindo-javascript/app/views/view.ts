export abstract class View<T> {
  protected _element: HTMLElement;
  constructor(selector: string) {
    this._element = document.querySelector(selector);
  }

  public update(model: T): void {
    const template = this.template(model);
    this._element.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
