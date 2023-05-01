import BehaviorButton from './BehaviorButton';

export default class EnterButton extends BehaviorButton {
  constructor(value, keyboard) {
    super(value, keyboard);
    this.element.classList.add('enter-button');
  }

  keydown() {
    super.keydown();
    const display = document.getElementById('text');
    display.value += '\n';
  }
}
