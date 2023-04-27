export class Button {
  constructor(value) {
    this.element = document.createElement('button');
    this.element.setAttribute('data-key', value);
    this.element.textContent = value;

    this.keydown = this.keydown.bind(this);
    this.keyup = this.keyup.bind(this);
  }

  keydown() {
    this.element.classList.add('active');
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