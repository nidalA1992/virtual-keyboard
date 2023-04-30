import BehaviorButton from "./BehaviorButton.js";

export default class AltButton extends BehaviorButton {
  keydown() {
    super.keydown();
    this.keyboard.alt = true;
    this.keyboard.lang();
  }

  keyup() {
    super.keyup();
    this.keyboard.alt = false;
  }
}
