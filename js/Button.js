export class Button {
  constructor(value) {
    this.button = document.createElement('button');
    this.button.setAttribute('data-key', value);
    this.button.textContent = value;

    this.active = this.active.bind(this);
    this.deactive = this.deactive.bind(this);
  }

  active() {
    this.button.classList.add('active');
  }

  deactive() {
    this.button.classList.remove('active');
  }

  init(container) {
    container.append(this.button);

    this.button.addEventListener('mousedown', this.active);
    this.button.addEventListener('mouseup', this.deactive);
  }
}