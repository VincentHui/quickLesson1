const { question } = require("./question.js");

console.log("I'm cool");
question("what do you think of vince? ", (userInput) =>
  console.log("this is what you think: " + userInput)
);
