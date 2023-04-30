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

  // alt () {
  //   if (this.upper) {
  //     this.toLowerCase();
  //   } else {
  //     this.toUpperCase();
  //   }
  // }
  //
  // toUpperCase() {
  //   this.upper = true;
  //   this.element.textContent = this.element.textContent.toUpperCase();
  //   this.element.setAttribute('data-key', this.element.textContent.toUpperCase());
  // }
  //
  // toLowerCase() {
  //   this.upper = false;
  //   this.element.textContent = this.element.textContent.toLowerCase();
  //   this.element.setAttribute('data-key', this.element.textContent.toLowerCase());
  // }

  keydown() {
    this.element.classList.add('active');
    document.getElementById('text').value = document.getElementById('text').value + this.element.dataset.key;
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