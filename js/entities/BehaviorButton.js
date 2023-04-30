import AbstractButton from "./AbstractButton.js";

export default class BehaviorButton extends AbstractButton {
  constructor(value, keyboard) {
    super();
    this.element = document.createElement('button');
    this.element.setAttribute('data-key', value);
    this.element.textContent = value;
    this.keyboard = keyboard;

    this.keydown = this.keydown.bind(this);
    this.keyup = this.keyup.bind(this);
  }

  init(container) {
    container.append(this.element);

    this.element.addEventListener('mousedown', this.keydown);
    this.element.addEventListener('mouseup', this.keyup);
  }
}
