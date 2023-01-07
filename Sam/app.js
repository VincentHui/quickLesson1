const { appendFile } = require("fs");
const { question } = require("../vince/question.js");

console.log("I am Sam");
console.log("Shutup Vince");

// question("what do you think of Captain Sam Hui? ", (input) => {
//   if(input != null)
//     console.log("Captain Sam Hui is " + input);
//   if(input == 0)
//     console.log("Answer the question please")}
// );
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

function add(a, b){
  return a+b;
}

function subtract(a,b){
  return a-b;
}

function multiply(a, b)
{
  return a*b;
}

function divide(a, b){
  return b/a;
}
console.log(add(3, 1));

console.log(subtract(5, 4));

console.log(multiply(5, 77));

console.log(divide(90,3));

var z=2;

console.log(z);

console.log(z-1);

const one = (a,b) => {return a+b};

console.log(one(4, 6));

const two = (a, b) => {return a-b};

const three = (a, b) => {return a*b};

const four = (a,b)=> {return a/b};

// function keyhole(a, b){
//   if a > 7, console.log("input a lower number")
// } 

var SamVar = add;

console.log(SamVar(3, 4));

function addandmultiply(a, b){
  var result = add(a, b); var result2 = multiply(a, b)
};
