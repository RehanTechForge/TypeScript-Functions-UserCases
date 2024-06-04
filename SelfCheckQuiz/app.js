import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        type: "input",
        name: "userAnswer",
        message: "What is The Capital of France?"
    }]);
function quiz(question, correctAnswer) {
    if (answer.userAnswer.toLowerCase() !== correctAnswer.toLowerCase()) {
        console.log("Wrong Answer. Try Again!");
    }
    else {
        console.log("Correct Answer");
    }
}
quiz("What is The Capital of France?", "Paris");
