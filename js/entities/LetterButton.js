import {AbstractButton} from "./AbstractButton.js";

export class LetterButton extends AbstractButton {
  constructor(value) {
    super();
    this.value = value;
    this.upper = false;
    this.element = document.createElement('button');
    this.element.setAttribute('data-key', value);
    this.element.textContent = value;

    this.keydown = this.keydown.bind(this);
    this.keyup = this.keyup.bind(this);
  }

  alt () {
    if (this.upper) {
      this.toLowerCase();
    } else {
      this.toUpperCase();
    }
  }

  toUpperCase() {
    this.upper = true;
    this.value = this.value.toUpperCase();
    this.element.textContent = this.value;
    this.element.setAttribute('data-key', this.value);
  }

  toLowerCase() {
    this.upper = false;
    this.value = this.value.toLowerCase();
    this.element.textContent = this.value;
    this.element.setAttribute('data-key', this.value);
  }

  keydown() {
    this.element.classList.add('active');
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