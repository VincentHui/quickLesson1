const { existsSync } = require("fs");
const { question } = require("../vince/question.js");

// console.log("I am Sam");
// console.log("Shutup Vince");

function sam(a, b){
  return 2+a*b;
}

function subtract(a, b){
  return a-b;
}

function add(a, b){
  return a+b;
}

function max(tocheck, limit){
  if(tocheck >= limit)
  console.log("limit reached")
  return tocheck < limit;
}

const what = (a,b) => {
  return a+b;
};

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
var addresult = 0
console.log(sam(4, 9));
addresult = add(2, 8)
console.log(subtract(69, 420));
var nice = subtract(69, 420)
console.log(add(10,10));

var eek = sam(6, 2);

console.log(eek);

console.log(addresult);


console.log(max(7, 6));

var Vince = "Vince is shit lol"
var Ben = 24
var isSamcool = false 
var Orc = true

function OK(saruman, sauron, Callum){
  var evil = saruman+ sauron
  return evil;
};

function Null(){
}
console.log(OK(1, 1, 1));

var test = 10;

add(4, 6);
// Define a function called AdditionAndMultiplication it will take in two parameters 
function AdditionAndMultiplication(a, b){
// then store the called value of the add function on these two parameters 
// and then store the called value of the mutltiplication functions.
add(a, b); sam(a, b)
var result = add(a, b); var result2 = sam(a, b)
return console.log(result, result2)
;
  // return a = add(5, 5), b = sam(5, 5)
}
console.log(AdditionAndMultiplication(5, 5));

// Something like function AdditionAndMultiplication(arg1, arg2){var result =add(); var result2=multiply();}. Then while still 
// in the scope of the function console.log the 
// variables and make sure the function returns nothing

function Text(input){
  if(input.length > 8)
    console.log("Too Long");
  else console.log(input);
}
console.log(Text("Orangesareorange"));

console.log(Text("Peels"))

function duh(a, b, c, d, e, f, g, h, i ,j){
  return a+b+c+d+e+f+g+h+i+j;
}

console.log(duh(10, 2, 34, 32,3,5,2,1,5,6));
