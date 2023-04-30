import LetterButton from "./LetterButton.js";
import CapsButton from "./CapsButton.js";
import ShiftButton from "./ShiftButton.js";
import BackspaceButton from "./BackspaceButton.js";
import keys from "../keys.js";
import {
  ALT_BUTTON,
  BACKSPACE,
  CAPS_LOCK,
  CONTROL_BUTTON,
  DELETE_BUTTON,
  ENTER_BUTTON,
  META_BUTTON,
  SHIFT,
  SPACE_BUTTON,
  TAB_BUTTON,
} from "../keyCodes.js";
import ControlButton from "./ControlButton.js";
import AltButton from "./AltButton.js";
import DeleteButton from "./DeleteButton.js";
import EnterButton from "./EnterButton.js";
import SpaceButton from "./SpaceButton.js";
import TabButton from "./TabButton.js";
import MetaButton from "./MetaButton.js";

export default class Keyboard {
  en = true;

  shift = false;

  caps = false;

  ctrl = false;

  alt = false;

  constructor() {
    this.keys = {};

    this.display = document.getElementById('text');

    this.eventKeyDown = this.eventKeyDown.bind(this);
    this.eventKeyUp = this.eventKeyUp.bind(this);
  }

  lang() {
    if (this.ctrl && this.alt) {
      this.en = !this.en;
      this.render();
    }
  }

  render(options) {
    window.removeEventListener('keydown', this.eventKeyDown);
    window.removeEventListener('keyup', this.eventKeyUp);

    this.keyboard.innerHTML = '';

    this.shift = options?.shift || this.shift;
    this.caps = options?.caps || this.caps;

    keys.forEach((row) => {
      const wrapper = document.createElement('div');
      row.forEach((key) => {
        if (key.value) {
          switch (key.code) {
            case META_BUTTON:
              this.keys[key.code] = new MetaButton('Meta');
              break;
            case TAB_BUTTON:
              this.keys[key.code] = new TabButton('Tab ⭾');
              break;
            case SPACE_BUTTON:
              this.keys[key.code] = new SpaceButton(' ');
              break;
            case ENTER_BUTTON:
              this.keys[key.code] = new EnterButton('↵ Enter');
              break;
            case DELETE_BUTTON:
              this.keys[key.code] = new DeleteButton('Del');
              break;
            case CAPS_LOCK:
              this.keys[key.code] = new CapsButton('Caps Lock', this, this.caps);
              break;
            case SHIFT:
              this.keys[key.code] = new ShiftButton('⇧ Shift', this, this.shift);
              break;
            case BACKSPACE:
              this.keys[key.code] = new BackspaceButton('⇦ Backspace');
              break;
            case CONTROL_BUTTON:
              this.keys[key.value] = new ControlButton('Ctrl', this);
              this.keys[key.value]?.init(wrapper);
              return;
            case ALT_BUTTON:
              this.keys[key.value] = new AltButton('Alt', this);
              this.keys[key.value]?.init(wrapper);
              return;
            default:
              break;
          }

          this.keys[key.code]?.init(wrapper);
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
          this.keys[key.code].init(wrapper);
        }
      });

      this.keyboard.append(wrapper);
    });

    window.addEventListener('keydown', this.eventKeyDown);
    window.addEventListener('keyup', this.eventKeyUp);
  }

  init(container) {
    this.container = container;
    this.keyboard = document.createElement('div');
    this.display = document.createElement('textarea');

    this.keyboard.classList.add('keyboard');
    this.display.classList.add('display');
    this.display.id = 'text';

    this.container.append(this.display);
    this.container.append(this.keyboard);
    this.render();
  }

  eventKeyDown(e) {
    if (e.code === 'MetaLeft' || e.code === 'MetaRight') {
      this.keydown(e.keyCode);
      return;
    }

    if (e.code === 'Delete') {
      this.keydown(e.keyCode);
      return;
    }

    e.preventDefault();

    if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
      this.keydown(e.code);
      return;
    }

    if (e.code === 'AltLeft' || e.code === 'AltRight') {
      this.keydown(e.code);
      return;
    }

    this.keydown(e.keyCode);
  }

  eventKeyUp(e) {
    e.preventDefault();
    if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
      this.keyup(e.code);
      return;
    }

    if (e.code === 'AltLeft' || e.code === 'AltRight') {
      this.keyup(e.code);
      return;
    }

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
