// Define a constant named parentFunc and assign it an arrow function.
// This function takes one argument, num, of type number, and returns a number.
const parentFunc = (num: number) => {
  // Define a function named childFirstFunc that increments num by 1.
  const childFirstFunc = () => {
    num += 1;
  }
  // Define a function named childSecondFunc that multiplies num by 3.
  const childSecondFunc = () => {
    num *= 3;
  }
  // Call the childFirstFunc to increment num.
  childFirstFunc();
  // Call the childSecondFunc to multiply num.
  childSecondFunc();
  // Return the modified num.
  return num;
}

// Call the parentFunc function with the argument 4, and log the result to the console.
console.log(parentFunc(4));  // Output: 15
