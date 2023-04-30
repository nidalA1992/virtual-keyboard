import BehaviorButton from "./BehaviorButton.js";

export default class BackspaceButton extends BehaviorButton {
  keydown() {
    this.element.classList.add('active');
    document.getElementById('text').value = document.getElementById('text').value.substring(0, document.getElementById('text').value.length - 1);
  }

  keyup() {
    this.element.classList.remove('active');
  }
}
