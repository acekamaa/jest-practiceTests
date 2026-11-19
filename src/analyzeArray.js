export function analyzeArray(arrayOfNumbers) {
  const sum = arrayOfNumbers.reduce((total, number) => total + number, 0);

  return {
    average: sum / arrayOfNumbers.length,
    min: Math.min(...arrayOfNumbers),
    max: Math.max(...arrayOfNumbers),
    length: arrayOfNumbers.length,
  };
}
