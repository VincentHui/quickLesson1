const { question } = require("../vince/question.js");

console.log("I am Sam");
console.log("Shutup Vince");

question("what do you think of ben? ", (inputFromConsole) => {
  console.log("you think ben is " + inputFromConsole);
});
