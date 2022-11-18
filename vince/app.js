const { question } = require("./question.js");

console.log("I'm cool");
console.log("im gay");

question("what do you think of vince? ", (userInput) =>
  console.log("this is what you think: " + userInput)
);

//these comments are just ways to annotate code it is not picked up by the compiler
function MyFunctionName() {
  //put logic in here in the scope of these curly brackets
}

function MyFunctionThatReturnsString() {
  return "blah";
}

function MyFunctionThatTakesParameter(parameter1) {
  console.log(parameter1);
}

function functionThatTakesParameterAndReturns(A, B) {
  return A + B;
}

const arrowFunctionDefinition = () => {
  console.log("test");
};
