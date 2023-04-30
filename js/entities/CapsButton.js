import {AbstractButton} from "./AbstractButton.js";

export class CapsButton extends AbstractButton {
  constructor(value, keyboard, isActive) {
    super();

    this.element = document.createElement('button');
    this.element.setAttribute('data-key', value);
    this.element.textContent = value;

    this.keyboard = keyboard;

    this.element.classList.toggle('active', isActive);
    this.keydown = this.keydown.bind(this);
    this.keyup = this.keyup.bind(this);
  }

  keydown() {
    this.keyboard.caps = !this.keyboard.caps;
    this.keyboard.render({caps: this.keyboard.caps});
  }

  keyup() {

  }

  init(container) {
    container.append(this.element);

    this.element.addEventListener('mousedown', this.keydown);
    this.element.addEventListener('mouseup', this.keyup);
  }
}