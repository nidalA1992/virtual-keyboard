import LetterButton from "./LetterButton.js";
import CapsButton from "./CapsButton.js";
import ShiftButton from "./ShiftButton.js";
import BackspaceButton from "./BackspaceButton.js";
import keys from "../keys.js";
import { BACKSPACE, CAPS_LOCK, SHIFT } from "../keyCodes.js";

export default class Keyboard {
  en = true;

  shift = false;

  caps = false;

  constructor() {
    this.keys = {};

    this.display = document.getElementById('text');

    this.eventKeyDown = this.eventKeyDown.bind(this);
    this.eventKeyUp = this.eventKeyUp.bind(this);
  }

  render(options) {
    window.removeEventListener('keydown', this.eventKeyDown);
    window.removeEventListener('keyup', this.eventKeyUp);

    this.container.innerHTML = '';

    // this.en = options?.en || this.en;
    this.shift = options?.shift || this.shift;
    this.caps = options?.caps || this.caps;

    keys.forEach(row => {
      row.forEach(key => {
        if (key.value) {
          switch (key.code) {
            case CAPS_LOCK:
              this.keys[key.code] = new CapsButton('Caps Lock', this, this.caps);
              break;

            case SHIFT:
              this.keys[key.code] = new ShiftButton('Shift', this, this.shift);
              break;

            case BACKSPACE:
              this.keys[key.code] = new BackspaceButton('Backspace');
              break;

            default:
              break;
          }

          this.keys[key.code]?.init(this.container);
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

          this.keys[key.code] = new LetterButton(i);
          this.keys[key.code].init(this.container);
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
    this.keydown(e.keyCode);
  }

  eventKeyUp(e) {
    e.preventDefault();
    this.keyup(e.keyCode);
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
