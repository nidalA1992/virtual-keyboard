import BehaviorButton from "./BehaviorButton.js";

export default class CapsButton extends BehaviorButton {
  constructor(value, keyboard, isActive) {
    super(value, keyboard);
    this.element.classList.toggle('active', isActive);
  }

  keydown() {
    this.element.classList.toggle('active');
    this.keyboard.caps = !this.keyboard.caps;
    this.keyboard.render({ caps: this.keyboard.caps });
  }

  keyup() {
    return this;
  }
}
