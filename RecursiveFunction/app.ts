// Define a constant named factorial and assign it an arrow function.
// This function takes one argument, num, of type number, and returns a number.
const factorial = (num: number): number => {
  // Check if num is 0. The factorial of 0 is defined as 1.
  if (num === 0) {
    return 1;
  }
  // Recursively call the factorial function with (num - 1) and multiply it by num.
  return num * factorial(num - 1);
}

// Call the factorial function with the argument 5, and log the result to the console.
console.log(factorial(5));  // Output: 120
