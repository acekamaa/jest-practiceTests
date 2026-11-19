export function calculate(a, b, operation) {
  // sum
  if (typeof a !== 'number' && typeof b !== 'number') {
    return undefined;
  }

  if (operation === 'add') return a + b;
  if (operation === 'subtract') return a - b;
  if (operation === 'divide') return a / b;
  if (operation === 'multiply') return a * b;
}
