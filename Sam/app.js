const { question } = require("../vince/question.js");

console.log("I am Sam");
console.log("Shutup Vince");

question("what do you think of Captain Sam Hui? ", (input) => {
  if(input != null)
    console.log("Captain Sam Hui is " + input);
  if(input == 0)
    console.log("Answer the question please")}
);
// question("what do you think of Captain Sam Hui",(input) => 
//{if(input => 0){
//  console.log("Captain Sam Hui is " + input)}
//else 
//{console.log("Answer the question please")}
//});

//question("What do you think of Captain Sam Hui",(input) => {
//  if(input.length == 0)
//     console.log("Answer the question please");
//   if(input.length > 0)
//     console.log("Sam Hui is " + input);
// })