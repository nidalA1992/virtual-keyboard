import BehaviorButton from './BehaviorButton.js';

export default class ControlButton extends BehaviorButton {
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
