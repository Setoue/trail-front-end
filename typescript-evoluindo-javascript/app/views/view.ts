export class View {
  protected _element: HTMLElement;
  constructor(selector: string) {
    this._element = document.querySelector(selector);
  }
}
