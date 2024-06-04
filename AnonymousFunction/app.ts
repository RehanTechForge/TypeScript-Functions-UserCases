const anonymousFunc = function (numbers: number[]) {
  const newNum = numbers.map(number => number * 2)
  return newNum;
}
console.log(anonymousFunc([1, 2, 3]));
