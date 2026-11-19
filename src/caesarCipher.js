function shiftCharacter(char, shift) {
  const code = char.charCodeAt(0);

  let base;

  if (code >= 65 && code <= 90) {
    base = 65; // Uppercase A-Z
  } else if (code >= 97 && code <= 122) {
    base = 97; // Lowercase a-z
  } else {
    return char; // Preserve punctuation, spaces, numbers
  }

  return String.fromCharCode(((code - base + shift) % 26) + base);
}

function normalizeShift(shiftFactor) {
  return ((shiftFactor % 26) + 26) % 26;
}

function caesarCipher(string, shiftFactor) {
  const shift = normalizeShift(shiftFactor);

  return string
    .split('')
    .map((char) => shiftCharacter(char, shift))
    .join('');
}

export { caesarCipher };
