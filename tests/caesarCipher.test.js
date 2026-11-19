import { caesarCipher } from '../src/caesarCipher';

// test for text wrapping z-a
test('wraps from z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

// test for case preservation
test('preserves letter case', () => {
  expect(caesarCipher('Hello', 3)).toBe('Khoor');
});

// test for text punctuation
test('leaves punctuation and spaces unchanged', () => {
  expect(caesarCipher('Hello, world!', 3)).toBe('Khoor, zruog!');
});
