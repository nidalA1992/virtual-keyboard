export class AbstractButton {
  keydown() {
    throw new Error('Implement this method');
  }

  keyup() {
    throw new Error('Implement this method');
  }

  init() {
    throw new Error('Implement this method');
  }
}