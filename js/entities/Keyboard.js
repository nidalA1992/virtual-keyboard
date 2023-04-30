import {keys} from "../keys.js";
import {LetterButton} from "./LetterButton.js";
import {CapsButton} from "./CapsButton.js";
import {ShiftButton} from "./ShiftButton.js";

export class Keyboard {
  en = true;
  shift = false;
  caps = false;

  constructor(display) {
    this.keys = {};

    this.display = document.getElementById('text');


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
    // this.keys = {};


    keys.forEach(row => {
      row.forEach(key => {
        if (key.value) {

          switch (key.value) {
            case 'CapsLock':
              this.keys[key.value] = new CapsButton('Caps Lock', this, this.caps);
              break;

            case 'ShiftLeft':
            case 'ShiftRight':
              this.keys[key.value] = new ShiftButton('Shift', this, this.shift);
          }

          this.keys[key.value]?.init(this.container);
        } else {

          let i;
          if (this.shift) {
            i = this.en ? key.shEn : key.shRu;
          } else {
            i = this.en ? key.en : key.ru;
          }

          if (this.caps) {
            i = i.toUpperCase();
          }

          if (this.caps && this.shift) {
            i = i.toLowerCase();
          }

          this.keys[i] = new LetterButton(i);
          this.keys[i].init(this.container);

        }
      });

      this.container.append(document.createElement('br'));
    });

    window.addEventListener('keydown', this.eventKeyDown);
    window.addEventListener('keyup', this.eventKeyUp);
  }

  init(container) {
    this.container = container;
    this.render();
  }

  eventKeyDown(e) {
    e.preventDefault();
    let code = e.key.length > 1 || e.key === ' ' ? e.code : e.key;

    if (code.length > 1) {
      this.keydown(code);
      return;
    }
    code = this.caps ? code.toUpperCase() : code.toLowerCase();
    this.keydown(this.shift ? code.toLowerCase() : code);
  }

  eventKeyUp(e) {
    e.preventDefault();
    let code = e.key.length > 1 || e.key === ' ' ? e.code : e.key;

    if (code.length > 1) {
      this.keyup(code);
      return;
    }
    code = this.caps ? code.toUpperCase() : code.toLowerCase();
    this.keyup(this.shift ? code.toLowerCase() : code);
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