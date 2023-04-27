export function getButton(e) {

  //проверка является ли нажатая клавиша символьным элементом
  const code = e.key.length > 1 || e.key === ' ' ? e.code : e.key;
  return keyboard.keys[code];

}