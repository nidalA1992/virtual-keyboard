export class Button {
  constructor(value) {
    this.element = document.createElement('button');
    this.element.setAttribute('data-key', value);
    this.element.textContent = value;

    this.active = this.active.bind(this);
    this.deactive = this.deactive.bind(this);
  }

  active() {
    this.element.classList.add('active');
  }

  deactive() {
    this.element.classList.remove('active');
  }

  init(container) {
    container.append(this.element);

    this.element.addEventListener('mousedown', this.active);
    this.element.addEventListener('mouseup', this.deactive);
  }
}