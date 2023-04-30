import {AbstractButton} from "./AbstractButton.js";

export class BackspaceButton extends AbstractButton {
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
    this.element.classList.add('active');
    document.getElementById('text').value = document.getElementById('text').value.substring(0, document.getElementById('text').value.length - 1);
  }

  keyup() {
    this.element.classList.remove('active');
  }

  init(container) {
    container.append(this.element);

    this.element.addEventListener('mousedown', this.keydown);
    this.element.addEventListener('mouseup', this.keyup);
  }
}