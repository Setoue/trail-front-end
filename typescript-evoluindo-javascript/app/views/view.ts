import { Negotiations } from "../models/negotiations";

export class View<T> {
  protected _element: HTMLElement;
  constructor(selector: string) {
    this._element = document.querySelector(selector);
  }

  update(model: T): void {
    const template = this.template(model);
    this._element.innerHTML = template;
  }

  template(model: T): string {
    throw Error("Class children need implement the method template");
  }
}
