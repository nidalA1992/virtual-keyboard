import {keys} from "./keys.js";
import {Button} from "./Button.js";

export class Keyboard {
  constructor() {}

  init(container) {

    keys.forEach(i => {
      i.en.forEach(i => new Button(i).init(container));

      container.append(document.createElement('br'));
    });

  }
}