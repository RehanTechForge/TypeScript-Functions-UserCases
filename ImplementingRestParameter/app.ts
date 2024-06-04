const sumAll = (...numbers: number[]): number => {
  let sum = 0
  numbers.map(number => sum += number)
  return sum;
}
console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40, 50));

