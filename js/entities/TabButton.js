import BehaviorButton from './BehaviorButton';

export default class TabButton extends BehaviorButton {
  keydown() {
    super.keydown();
    const display = document.getElementById('text');
    display.value += '\t';
  }
}
