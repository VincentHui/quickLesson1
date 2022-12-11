const { Console } = require("console");
const { question } = require("../vince/question.js");
var poo = "poo"

// function myfirstfunction(parameter1){console.log(parameter1)}
// function benlog(parameter1){console.log(parameter1)}
// function add(parameter1,parameter2)
// {
//   var result = parameter1 + parameter2
//   console.log(result)
// }

// function sum(parameter1,parameter2,parameter3)
// {
//   var result = parameter1 + parameter2 + parameter3
//   console.log(result)
// }

// function sumextra(parameter1,parameter2,parameter3)
// {
//   console.log("Welcome to the sumextra function.")
//   var result = parameter1 + parameter2 + parameter3
//   console.log(result)
// }

// function subtract(parameter1,parameter2)
// {
// var result = parameter1 - parameter2
// console.log(result)
// }

// function multiply(parameter1,parameter2)
// {
// var result = parameter1 * parameter2
// console.log(result)
// }

// function reeturn(parameter1,parameter2,parameter3)
// {
//   var result = parameter1 + parameter2 + parameter3
//   return result
// }

// myfirstfunction ("line1")
// benlog("vince is dumb")
// add(reeturn(1,1,1),2)
// subtract(1023844,72894)
// add(1000000,3000000)
// multiply(12,12)
// sum(23,32,42)
// sumextra(52,12,5)
// var specialresult = reeturn(23,41,2)
// console.log(specialresult)

console.log("THIS IS WHERE HW 2 BEGINS")

var Adding = (parameter1,parameter2) => parameter1 + parameter2

function Subtracting(parameter1,parameter2){
  return parameter1 - parameter2}

function Multiplying(parameter1,parameter2){
  return parameter1 * parameter2}

  function Dividing(parameter1,parameter2){
var result = parameter1 / parameter2
    return result}

const AddingMultiplying = (parameter1, parameter2) => {var resultADD = Adding(parameter1,parameter2); var resultMULTIPLY = Multiplying(parameter1,parameter2)
  console.log("WELCOME TO THE ADDING AND MULTIPLYING FUNCTION.")
  console.log(("Addition:"),{resultADD}, ("Multiplication:"), {resultMULTIPLY})
  console.log("END OF THE ADDING AND MULTIPLYING FUNCTION.")
}

// const AddingMultiplying = (parameter1, parameter2) => {var result1 = Adding(); var result2 = Multiplying()
// console.log(result1, result2)}

var LongBoi = (parameter1) => {
  var result = parameter1
  if (result < 10)
    console.log({result})
  if ( result > 10 )
    console.log("TOO LONG")
}

var BIGADDITION = (parameter1,parameter2,parameter3,parameter4,parameter5,parameter6,parameter7,parameter8,parameter9) => {
  result = (parameter1 + parameter2 + parameter3 + parameter4 + parameter5 + parameter6 + parameter7 + parameter8 + parameter9)
  console.log(("The results for this big ass addition is..."), {result})}

var BonusAdd = Adding(1,9)
console.log (BonusAdd)
console.log (Dividing(8,2))
console.log (Adding(8,2))
console.log (Subtracting(8,2))
console.log (Multiplying(8,2))
AddingMultiplying(4,2)
console.log(LongBoi(1))
console.log(LongBoi(12))
BIGADDITION(3,2,3,1,4,5,6,7,8)
console.log("END OF HW 2.")

question("what do you think of HW 2? ", (input) => {
  if (input == ("ez"))
  console.log("Yeah so easy its such a snooze fest fr")
  if (input.length == 0) 
  console.log("put in something dummy")
  if (input.includes(poo))
  console.log("do not say the word poo!")
  if (input.length > 0)
console.log("you think the HW is " + input);
});
