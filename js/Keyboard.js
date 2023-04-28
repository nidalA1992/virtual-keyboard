import {keys} from "./keys.js";
import {Button} from "./Button.js";

export class Keyboard {
  en = true;
  shift = false;
  caps = false;

  constructor() {
    this.keys = {};
  }

  render() {
    keys.forEach(i => {
      i[this.layout].forEach(i => {
        this.keys[i] = new Button(i);
        this.keys[i].init(this.container);
      });

      this.container.append(document.createElement('br'));
    });
  }

  get layout() {
    return this.en && this.shift ?  'shiftEn' :
           this.en && !this.shift ? 'en'     :
           !this.en && this.shift ? 'shiftRu':
                                    'ru';
  }

  init(container) {
    this.container = container;
    this.render();
  }

  keydown(code) {
    if (code in this.keys) {
      this.keys[code].keydown();
    }
  }

  keyup(code) {
    if (code in this.keys) {
      this.keys[code].keyup();
    }
  }
}