import {AbstractButton} from "./AbstractButton.js";

export class ShiftButton extends AbstractButton {
  constructor(value, keyboard, isActive) {
    super();
    this.element = document.createElement('button');
    this.element.setAttribute('data-key', value);
    this.value = value;
    this.keyboard = keyboard;

    this.element.textContent = this.value;
    this.element.classList.toggle('active', isActive);

  }

  keydown() {
    // console.log(this.element)
    if (this.keyboard.shift) {
      return;
    }
    this.keyboard.shift = true;
    this.keyboard.render({shift: true});
  }

  keyup() {
    this.keyboard.shift = false;
    this.keyboard.render({shift: false});
  }

  init(container) {
    container.append(this.element);

    this.element.addEventListener('mousedown', this.keydown);
    this.element.addEventListener('mouseup', this.keyup);
  }

}