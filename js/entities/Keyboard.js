import {keys} from "../keys.js";
import {LetterButton} from "./LetterButton.js";
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
    this.keys = {};

    keys.forEach(row => {
      row.forEach(key => {
        if (key.value) {

          switch (key.value) {
            case 'CapsLock':
              this.keys[key.value] = new CapsButton('Caps Lock', this, this.caps);
              break;
          }

          this.keys[key.value]?.init(this.container);
        } else {
          const i = this.en ? key.en : key.ru;

          this.keys[i] = new LetterButton(key);
          this.caps ? this.keys[i].toUpperCase() : this.keys[i].toLowerCase()
          this.keys[i].init(this.container);
        }

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