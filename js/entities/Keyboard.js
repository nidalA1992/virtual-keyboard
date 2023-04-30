import {keys} from "../keys.js";
import {LetterButton} from "./LetterButton.js";
import {CapsButton} from "./CapsButton.js";

export class Keyboard {
  en = true;
  shift = false;
  caps = false;

  constructor() {
    this.keys = {};

    this.eventKeyDown = this.eventKeyDown.bind(this);
    this.eventKeyUp = this.eventKeyUp.bind(this);
  }

  render(options) {
    window.removeEventListener('keydown', this.eventKeyDown);
    window.removeEventListener('keyup', this.eventKeyUp);

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
          let i = this.en ? key.en : key.ru;
          i = this.caps ? i.toUpperCase() : i;

          this.keys[i] = new LetterButton(key);
          this.caps ? this.keys[i].toUpperCase() : this.keys[i].toLowerCase()
          this.keys[i].init(this.container);
        }

      });

      this.container.append(document.createElement('br'));
    });

    window.addEventListener('keydown', this.eventKeyDown);
    window.addEventListener('keyup', this.eventKeyUp);
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

  eventKeyDown(e) {
    e.preventDefault();
    const code = e.key.length > 1 || e.key === ' ' ? e.code : e.key;
    this.keydown(code);
  }

  eventKeyUp(e) {
    e.preventDefault();
    const code = e.key.length > 1 || e.key === ' ' ? e.code : e.key;
    this.keyup(code);
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