import { reverseStr } from '../src/reverseStr';

test('takes a string and returns it in reverse', () => {
  const str = 'hello';
  const newStr = reverseStr(str);

  expect(newStr).toEqual('olleh');
});
