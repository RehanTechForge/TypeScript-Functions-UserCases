// Define a constant named anonymousFunc and assign it an anonymous function.
// This function takes one argument, numbers, which is an array of numbers.
const anonymousFunc = function (numbers: number[]) {
  // Use the map method to create a new array where each number in the input array is multiplied by 2.
  const newNum = numbers.map(number => number * 2);
  // Return the new array.
  return newNum;
}

// Call the anonymousFunc function with the argument [1, 2, 3], and log the result to the console.
console.log(anonymousFunc([1, 2, 3]));  // Output: [2, 4, 6]
