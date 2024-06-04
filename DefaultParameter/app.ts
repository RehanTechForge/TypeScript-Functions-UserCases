// Define a function named greet that takes two arguments: name and message.
// The name argument is of type string.
// The message argument is also of type string and has a default value of "Hello".
function greet(name: string, message: string = "Hello") {
  // Return a greeting string that includes the message and the name.
  return `${message}, ${name}!`;
}

// Call the greet function with the argument "rehan".
// Since no second argument is provided, the default value "Hello" will be used for the message.
console.log(greet("rehan"));  // Output: "Hello, rehan!"

// Call the greet function with the arguments "usman" and "Hi".
// The provided message "Hi" will be used instead of the default value.
console.log(greet("usman", "Hi"));  // Output: "Hi, usman!"
