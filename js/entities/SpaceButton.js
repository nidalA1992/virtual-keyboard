import BehaviorButton from './BehaviorButton';

export default class SpaceButton extends BehaviorButton {
  constructor(value) {
    super(value);
    this.element.classList.add('space-button');
  }

  keydown() {
    super.keydown();
    const display = document.getElementById('text');
    display.value += ' ';
  }
}
