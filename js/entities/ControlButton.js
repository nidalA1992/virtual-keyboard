import BehaviorButton from "./BehaviorButton.js";

export default class ControlButton extends BehaviorButton {
  constructor(value, keyboard) {
    super(value, keyboard);
    this.keyboard = keyboard;
  }

  keydown() {
    super.keydown();
    this.keyboard.ctrl = true;
    this.keyboard.lang();
  }

  keyup() {
    super.keyup();
    this.keyboard.ctrl = false;
  }
}
