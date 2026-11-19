import { calculate } from '../src/calc';

// sum
describe('sum', () => {
  test('sums two positive integers', () => {
    let a = 2;
    let b = 4;

    const summation = calculate(a, b, 'add');
    expect(summation).toBe(6);
  });

  test('sums floating numbers', () => {
    let a = 2.5;
    let b = 3.2;

    const sum = calculate(a, b, 'add');
    expect(sum).toBeCloseTo(5.7);
  });

  test('sums negative integers', () => {
    let a = -3;
    let b = -5;

    const sum = calculate(a, b, 'add');
    expect(sum).toBe(-8);
  });

  test('sums negative floating numbers', () => {
    let a = -5.3;
    let b = -3.2;

    const sum = calculate(a, b, 'add');
    expect(sum).toBeCloseTo(-8.5);
  });
});

// subtract
describe('subtract', () => {
  test('subtract two positive integers', () => {
    let a = 7;
    let b = 4;

    const diff = calculate(a, b, 'subtract');
    expect(diff).toBe(3);
  });

  test('subtract floating numbers', () => {
    let a = 8.5;
    let b = 3.2;

    const diff = calculate(a, b, 'subtract');
    expect(diff).toBe(5.3);
  });

  test('subtract negative integers', () => {
    let a = -3;
    let b = -5;

    const diff = calculate(a, b, 'subtract');
    expect(diff).toBe(2);
  });

  test('subtract negative floating numbers', () => {
    let a = -5.3;
    let b = -3.2;

    const diff = calculate(a, b, 'subtract');
    expect(diff).toBeCloseTo(-2.1);
  });
});

// divide
describe('divide', () => {
  test('divide two positive integers', () => {
    let a = 8;
    let b = 4;

    const divide = calculate(a, b, 'divide');
    expect(divide).toBe(2);
  });

  test('divide floating numbers', () => {
    let a = 2.5;
    let b = 3.2;

    const divide = calculate(a, b, 'divide');
    expect(divide).toBe(0.78125);
  });

  test('divide negative integers', () => {
    let a = -3;
    let b = -5;

    const divide = calculate(a, b, 'divide');
    expect(divide).toBe(0.6);
  });

  test('divide negative floating numbers', () => {
    let a = -5.3;
    let b = -3.2;

    const divide = calculate(a, b, 'divide');
    expect(divide).toBeCloseTo(1.65625);
  });
});

// multiply
describe('multiply', () => {
  test('multiply two positive integers', () => {
    let a = 2;
    let b = 4;

    const multiply = calculate(a, b, 'multiply');
    expect(multiply).toBe(8);
  });

  test('multiply floating numbers', () => {
    let a = 2.5;
    let b = 3.2;

    const multiply = calculate(a, b, 'multiply');
    expect(multiply).toBe(8);
  });

  test('multiply negative integers', () => {
    let a = -3;
    let b = -5;

    const multiply = calculate(a, b, 'multiply');
    expect(multiply).toBe(15);
  });

  test('multiply negative floating numbers', () => {
    let a = -5.3;
    let b = -3.2;

    const multiply = calculate(a, b, 'multiply');
    expect(multiply).toBe(16.96);
  });
});
