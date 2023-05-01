import BehaviorButton from './BehaviorButton';

export default class ShiftButton extends BehaviorButton {
  constructor(value, keyboard, isActive) {
    super(value, keyboard);
    this.element.classList.toggle('active', isActive);
  }

  keydown() {
    if (this.keyboard.shift) {
      return;
    }
    this.keyboard.shift = true;
    this.keyboard.render({ shift: true });
  }

  keyup() {
    this.keyboard.shift = false;
    this.keyboard.render({ shift: false });
  }
}
