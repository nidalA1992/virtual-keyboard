import {keys} from "./keys.js";
import {Button} from "./Button.js";

export class Keyboard {
  constructor() {
    this.keys = {};
  }

  init(container) {

    keys.forEach(i => {
      i.en.forEach(i => {
        this.keys[i] = new Button(i);
        this.keys[i].init(container);
      });

      container.append(document.createElement('br'));
    });

  }
}