const keyCodes = {
  'a': 65,
  'b': 66,
  'c': 67,
  'd': 68,
  'e': 69,
  'f': 70,
  'g': 71,
  'h': 72,
  'i': 73,
  'j': 74,
  'k': 75,
  'l': 76,
  'm': 77,
  'n': 78,
  'o': 79,
  'p': 80,
  'q': 81,
  'r': 82,
  's': 83,
  't': 84,
  'u': 85,
  'v': 86,
  'w': 87,
  'x': 88,
  'y': 89,
  'z': 90,
  '0': 48,
  '1': 49,
  '2': 50,
  '3': 51,
  '4': 52,
  '5': 53,
  '6': 54,
  '7': 55,
  '8': 56,
  '9': 57,
  'csl': 20,
  'shf': 16,
  'ctr': 17,
  'wnl': 91,
  'wnr': 93,
  'alt': 18,
  'spc': 32,
  'ent': 13,
  'men': 93,
  'ps': 44,
  'sl': 145,
  'pb': 19,
  'ins': 45,
  'hom': 36,
  'pgu': 33,
  'del': 46,
  'end': 35,
  'pgd': 34,
  'nl': 144,
  '←': 37,
  '↑': 38,
  '↓': 40,
  '→': 39,
  'esc': 27,
  'bcs': 8,
  'tab': 9,
  '-': 189,
  '=': 187,
  ';': 186,
  ',': 188,
  '.': 190,
  '[': 219,
  ']': 221,
  '|': 220,
  '\'': 222,
  '/': 191,
  '`': 192,
  'F1': 112,
  'F2': 113,
  'F3': 114,
  'F4': 115,
  'F5': 116,
  'F6': 117,
  'F7': 118,
  'F8': 119,
  'F9': 120,
  'F10': 121,
  'F11': 122,
  'F12': 123,
  'nm0': 96,
  'nm1': 97,
  'nm2': 98,
  'nm3': 99,
  'nm4': 100,
  'nm5': 101,
  'nm6': 102,
  'nm7': 103,
  'nm8': 104,
  'nm9': 105,
}

export const keyValidator = (keyCode) => {
  let currentKey = 'und'
  for (let key in keyCodes) {
    if (keyCode === keyCodes[key]) {
      currentKey = key
    }
  }
  return currentKey
}
