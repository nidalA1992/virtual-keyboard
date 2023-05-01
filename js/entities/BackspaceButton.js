import BehaviorButton from './BehaviorButton.js';

export default class BackspaceButton extends BehaviorButton {
  keydown() {
    this.element.classList.add('active');

    const display = document.getElementById('text');
    display.value = display.value.substring(0, display.value.length - 1);
  }

  keyup() {
    this.element.classList.remove('active');
  }
}
