// Define a constant named multiplier and assign it an arrow function.
// This function takes one argument, x, of type number, and returns another function.
const multiplier = (x: number) => {
  // The returned function takes one argument, y, of type number, and returns the product of x and y.
  return (y: number) => {
    return x * y;
  }
}

// Call the multiplier function with the argument 3 and assign the returned function to the constant triple.
const triple = multiplier(3);

// Call the triple function with the argument 5, and log the result to the console.
console.log(triple(5));  // Output: 15
