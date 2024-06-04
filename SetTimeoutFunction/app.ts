// Define a constant named simulateDelay and assign it an arrow function.
// This function takes one argument, callback, which is of type Function.
const simulateDelay = (callback: Function) => {
  // Use the setTimeout function to execute the callback function after a delay of 2000 milliseconds (2 seconds).
  setTimeout(callback, 2000);
}

// Call the simulateDelay function with a callback that logs "Data Received" to the console.
simulateDelay(() => console.log("Data Received"));
