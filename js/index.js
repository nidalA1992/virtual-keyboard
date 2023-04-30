import {Keyboard} from "./entities/Keyboard.js";

const app = document.getElementById('app');

const keyboard = new Keyboard()
keyboard.init(app);

window.addEventListener('keydown', (e) => {

  e.preventDefault();
  const code = e.key.length > 1 || e.key === ' ' ? e.code : e.key;
  keyboard.keydown(code);
})

window.addEventListener('keyup', (e) => {

  e.preventDefault();
  const code = e.key.length > 1 || e.key === ' ' ? e.code : e.key;
  keyboard.keyup(code);

})