const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (question, response) =>
  rl.question(question, (input) => {
    response(input);
    rl.close();
  });

module.exports = { question };
