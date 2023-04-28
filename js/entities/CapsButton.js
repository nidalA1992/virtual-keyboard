import {Button} from "./Button.js";

export class CapsButton extends Button {
  constructor(value, keyboard, isActive) {
    super(value);
    this.keyboard = keyboard;
    this.element.classList.toggle('active', isActive);
  }

  keydown() {
    this.element.classList.toggle('active');
    this.keyboard.caps = !this.keyboard.caps;
    this.keyboard.render({caps: this.keyboard.caps});
  }

  keyup() {

  }
}