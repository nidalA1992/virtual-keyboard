import { Keyboard } from './entities/Keyboard.js';

const app = document.getElementById('app');

const keyboard = new Keyboard();
keyboard.init(app);
