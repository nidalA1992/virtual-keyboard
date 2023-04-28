import {keys} from "../keys.js";
import {Button} from "./Button.js";
import {CapsButton} from "./CapsButton.js";

export class Keyboard {
  en = true;
  shift = false;
  caps = false;

  constructor() {
    this.keys = {};
  }

  render(options) {
    this.container.innerHTML = '';

    this.en = options?.en || this.en;
    this.shift = options?.shift || this.shift;
    this.caps = options?.caps || this.caps;

    keys.forEach(i => {
      i[this.layout].forEach(i => {
        if (i === 'CapsLock') {
          this.keys[i] = new CapsButton('Caps Lock', this, this.caps);
        } else {
          this.keys[i] = new Button(this.caps ? i.toUpperCase() : i);
        }
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