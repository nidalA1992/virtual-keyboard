const keys = [
  [
    {
      en: '`', shEn: '~', ru: 'ё', shRu: 'Ё', code: 192,
    },
    {
      en: '0', shEn: ')', ru: '0', shRu: ')', code: 48,
    },
    {
      en: '1', shEn: '!', ru: '1', shRu: '!', code: 49,
    },
    {
      en: '2', shEn: '@', ru: '2', shRu: '"', code: 50,
    },
    {
      en: '3', shEn: '#', ru: '3', shRu: '№', code: 51,
    },
    {
      en: '4', shEn: '$', ru: '4', shRu: ';', code: 52,
    },
    {
      en: '5', shEn: '%', ru: '5', shRu: '%', code: 53,
    },
    {
      en: '6', shEn: '^', ru: '6', shRu: ':', code: 54,
    },
    {
      en: '7', shEn: '&', ru: '7', shRu: '?', code: 55,
    },
    {
      en: '8', shEn: '*', ru: '8', shRu: '*', code: 56,
    },
    {
      en: '9', shEn: '(', ru: '9', shRu: '(', code: 57,
    },
    {
      en: '-', shEn: '_', ru: '-', shRu: '_', code: 189,
    },
    {
      en: '=', shEn: '+', ru: '=', shRu: '+', code: 187,
    },
    {
      value: 'Backspace', code: 8,
    },
  ],
  [
    {
      value: 'Tab', code: 9,
    },
    {
      en: 'q', shEn: 'Q', ru: 'й', shRu: 'Й', code: 81,
    },
    {
      en: 'w', shEn: 'W', ru: 'ц', shRu: 'Ц', code: 87,
    },
    {
      en: 'e', shEn: 'E', ru: 'у', shRu: 'У', code: 69,
    },
    {
      en: 'r', shEn: 'R', ru: 'к', shRu: 'К', code: 82,
    },
    {
      en: 't', shEn: 'T', ru: 'е', shRu: 'Е', code: 84,
    },
    {
      en: 'y', shEn: 'Y', ru: 'н', shRu: 'Н', code: 89,
    },
    {
      en: 'u', shEn: 'U', ru: 'г', shRu: 'Г', code: 85,
    },
    {
      en: 'i', shEn: 'I', ru: 'ш', shRu: 'Ш', code: 73,
    },
    {
      en: 'o', shEn: 'O', ru: 'щ', shRu: 'Щ', code: 79,
    },
    {
      en: 'p', shEn: 'P', ru: 'з', shRu: 'З', code: 80,
    },
    {
      en: '[', shEn: '{', ru: 'х', shRu: 'Х', code: 219,
    },
    {
      en: ']', shEn: '}', ru: 'ъ', shRu: 'Ъ', code: 221,
    },
    {
      en: '\\', shEn: '|', ru: '\\', shRu: '/', code: 220,
    },
    {
      value: 'Delete', code: 46,
    },
  ],
  [
    {
      value: 'CapsLock', code: 20,
    },
    {
      en: 'a', shEn: 'A', ru: 'ф', shRu: 'Ф', code: 65,
    },
    {
      en: 's', shEn: 'S', ru: 'ы', shRu: 'Ы', code: 83,
    },
    {
      en: 'd', shEn: 'D', ru: 'в', shRu: 'В', code: 68,
    },
    {
      en: 'f', shEn: 'F', ru: 'а', shRu: 'А', code: 70,
    },
    {
      en: 'g', shEn: 'G', ru: 'п', shRu: 'П', code: 71,
    },
    {
      en: 'h', shEn: 'H', ru: 'р', shRu: 'Р', code: 72,
    },
    {
      en: 'j', shEn: 'J', ru: 'о', shRu: 'О', code: 74,
    },
    {
      en: 'k', shEn: 'K', ru: 'л', shRu: 'Л', code: 75,
    },
    {
      en: 'l', shEn: 'L', ru: 'д', shRu: 'Д', code: 76,
    },
    {
      en: ';', shEn: ':', ru: 'ж', shRu: 'Ж', code: 186,
    },
    {
      en: '\'', shEn: '"', ru: 'э', shRu: 'Э', code: 222,
    },
    {
      value: 'Enter', code: 13,
    },
  ],
  [
    {
      value: 'ShiftLeft', code: 16,
    },
    {
      en: 'z', shEn: 'Z', ru: 'я', shRu: 'Я', code: 90,
    },
    {
      en: 'x', shEn: 'X', ru: 'ч', shRu: 'Ч', code: 88,
    },
    {
      en: 'c', shEn: 'C', ru: 'с', shRu: 'С', code: 67,
    },
    {
      en: 'v', shEn: 'V', ru: 'м', shRu: 'М', code: 86,
    },
    {
      en: 'b', shEn: 'B', ru: 'и', shRu: 'И', code: 66,
    },
    {
      en: 'n', shEn: 'N', ru: 'т', shRu: 'Т', code: 78,
    },
    {
      en: 'm', shEn: 'M', ru: 'ь', shRu: 'Ь', code: 77,
    },
    {
      en: ',', shEn: '<', ru: 'б', shRu: 'Б', code: 188,
    },
    {
      en: '.', shEn: '>', ru: 'ю', shRu: 'Ю', code: 190,
    },
    {
      en: '/', shEn: '?', ru: '.', shRu: ',', code: 191,
    },
    {
      value: 'ShiftRight', code: 16,
    },
    {
      en: '🠑', shEn: '🠑', ru: '🠑', shRu: '🠑', code: 38,
    },
  ],
  [
    {
      value: 'ControlLeft', code: 17,
    },
    {
      value: 'MetaLeft', code: 91,
    },
    {
      value: 'AltLeft', code: 18,
    },
    {
      value: 'Space', code: 32,
    },
    {
      value: 'AltRight', code: 18,
    },
    {
      value: 'ControlRight', code: 17,
    },
    {
      en: '🠐', shEn: '🠐', ru: '🠐', shRu: '🠐', code: 37,
    },
    {
      en: '🠓', shEn: '🠓', ru: '🠓', shRu: '🠓', code: 40,
    },
    {
      en: '🠒', shEn: '🠒', ru: '🠒', shRu: '🠒', code: 39,
    },
  ],
];

export default keys;
