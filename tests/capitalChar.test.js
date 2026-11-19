import { capitalizeChar } from '../src/capitalChar';

test('capitalize the first character of a string', () => {
  const greeting = 'hello world';
  const capital = capitalizeChar(greeting);

  expect(capital).toBe('Hello world');
});
