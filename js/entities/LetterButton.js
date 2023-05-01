import AbstractButton from './AbstractButton';

export default class LetterButton extends AbstractButton {
  constructor(value) {
    super();
    this.value = value;
    this.upper = false;

    this.element = document.createElement('button');
    this.element.setAttribute('data-key', value);
    this.element.textContent = value;
    this.element.classList.add('letter-button');

    this.keydown = this.keydown.bind(this);
    this.keyup = this.keyup.bind(this);
  }

  keydown() {
    this.element.classList.add('active');
    const display = document.getElementById('text');
    display.value += this.element.dataset.key;
  }

  keyup() {
    this.element.classList.remove('active');
  }

  init(container) {
    container.append(this.element);

    this.element.addEventListener('mousedown', this.keydown);
    this.element.addEventListener('mouseup', this.keyup);
  }
}
