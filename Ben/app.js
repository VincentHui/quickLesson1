const { Console } = require("console");
const { question } = require("../vince/question.js");
var poo = "poo"

function myfirstfunction(parameter1){console.log(parameter1)}
function benlog(parameter1){console.log(parameter1)}
function add(parameter1,parameter2)
{
  var result = parameter1 + parameter2
  console.log(result)
}

function sum(parameter1,parameter2,parameter3)
{
  var result = parameter1 + parameter2 + parameter3
  console.log(result)
}

function sumextra(parameter1,parameter2,parameter3)
{
  console.log("Welcome to the sumextra function.")
  var result = parameter1 + parameter2 + parameter3
  console.log(result)
}

function subtract(parameter1,parameter2)
{
var result = parameter1 - parameter2
console.log(result)
}

function multiply(parameter1,parameter2)
{
var result = parameter1 * parameter2
console.log(result)
}

function reeturn(parameter1,parameter2,parameter3)
{
  var result = parameter1 + parameter2 + parameter3
  return result
}

function yolo(parameter1,parameter2)
{  return parameter1 + parameter2}

var AddFunction = yolo(2,3)

var AddResult = AddFunction
AddResult = 5+4

myfirstfunction ("line1")
benlog("vince is dumb")
add(reeturn(1,1,1),2)
subtract(1023844,72894)
add(1000000,3000000)
multiply(12,12)
sum(23,32,42)
sumextra(52,12,5)
var specialresult = reeturn(23,41,2)
console.log(specialresult)
console.log(AddFunction)
console.log(AddResult)



question("what do you think of Vince? ", (input) => {
  if (input.length == 0) 
  console.log("put in something dummy")
  if (input.includes(poo))
  console.log("do not say the word poo!")
  if (input.length > 0)
console.log("you think Vince is " + input);
});
