import BehaviorButton from "./BehaviorButton.js";

export default class EnterButton extends BehaviorButton {
  keydown() {
    super.keydown();
    const display = document.getElementById('text');
    display.value += '\n';
  }
}
