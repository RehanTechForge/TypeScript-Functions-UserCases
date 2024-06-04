// Define a constant named sumAll and assign it an arrow function.
// This function takes a rest parameter, numbers, which is an array of numbers, and returns a number.
const sumAll = (...numbers: number[]): number => {
  // Initialize a variable named sum to 0.
  let sum = 0;
  // Use the map method to iterate over each number in the numbers array.
  // For each number, add it to the sum.
  numbers.map(number => sum += number);
  // Return the total sum.
  return sum;
}

// Call the sumAll function with the arguments 1, 2, and 3, and log the result to the console.
console.log(sumAll(1, 2, 3));  // Output: 6

// Call the sumAll function with the arguments 10, 20, 30, 40, and 50, and log the result to the console.
console.log(sumAll(10, 20, 30, 40, 50));  // Output: 150
