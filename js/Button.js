export class Button {
  constructor(value) {
    this.button = document.createElement('button');
    this.button.textContent = value;
  }

  attach (container) {
    container.append(this.button);
  }

}