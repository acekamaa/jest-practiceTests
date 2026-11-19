export function reverseStr(str) {
  if (str.length === 0) return str;

  const newArr = str.split('');
  return newArr.reverse().join('');
}
