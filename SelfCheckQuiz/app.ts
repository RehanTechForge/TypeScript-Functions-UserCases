// Import the inquirer library to handle user input.
import inquirer from "inquirer";

// Use the inquirer library to prompt the user with a question and wait for their answer.
// The prompt method returns a promise, so we use await to handle the asynchronous operation.
const answer = await inquirer.prompt([{
  type: "input",
  name: "userAnswer",
  message: "What is The Capital of France?"
}]);

// Define a function named quiz that takes two arguments: question and correctAnswer, both of type string.
function quiz(question: string, correctAnswer: string) {
  // Compare the user's answer with the correct answer, ignoring case differences.
  if (answer.userAnswer.toLowerCase() !== correctAnswer.toLowerCase()) {
    // If the answer is incorrect, log "Wrong Answer. Try Again!" to the console.
    console.log("Wrong Answer. Try Again!");
  } else {
    // If the answer is correct, log "Correct Answer" to the console.
    console.log("Correct Answer");
  }
}

// Call the quiz function with the question "What is The Capital of France?" and the correct answer "Paris".
quiz("What is The Capital of France?", "Paris");
