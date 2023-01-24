//EXAMPLE TEST AND ASSERTIONS
//all the assertions in the example area will pass

//array initilisation by defining and assigning testArray the value of an empty array
var testArray = [];
//note how we check for the length of the array
console.assert(testArray.length === 0, "array should be empty!");
//note how we push on to the array here to add to it
testArray.push("one");
testArray.push("two");
console.assert(testArray.length === 2, "array should have two elements");
//note how we access the elements using the index operators []
//READ BELOW
//also note how the first element is always 0! this is called zero index
//READ ABOVE
console.assert(
  testArray[0] === "one",
  "array should have correct element value"
);
console.assert(
  testArray[1] === "two",
  "array should have correct element value"
);
//note how we can reassign testArray variable the value of a new array
testArray = [1, 2, 3, 4, 5];
console.assert(
  testArray.length === 5,
  "testArray is correct length after reassignment"
);

//note how we setup an array and we manage to access each element in the index
//we can check each element in the array using the for loop
for (let index = 0; index < testArray.length; index++) {
  const element = testArray[index];
  console.assert(element < 6, "element shouldn't be higher than 6!");
  console.assert(element !== "error", "element shouldn't have error!");
}

//const newArray = [];
//note how we can add to an array using a loop
//note how as long as index is less than 5 it will keep looping so it will ass five elements
//for (let index = 0; index < 5; index++) {
//  newArray.push("new element" + index);
//}
//console.assert(newArray.length === 5, "array doesn't have 5 items in it");

//HOMEWORK

//HINT you will read this from the error in the console, but define homeworkArray!

var homeworkArray = [];

console.assert(
  homeworkArray.length === 0,
  "the array should have 0 elements in it and be defined!"
);
var homeworkArray = [1, 2, 3, 4, 5];

console.assert(
  homeworkArray.length === 5,
  "the array should have elements added to it"
);

var homeworkArray = ["first", 2, 3, 5, 6];
console.assert(
  homeworkArray[0] === "first",
  "first element should be a string with value first"
);

var homeworkArray = [1, "second", 2, 3, 4];

console.assert(
  homeworkArray[1] === "second",
  "second element should be a string with value second"
);
var newArray = ["sam", "ben"];
console.assert(
  newArray.length === 2,
  "var new array whould be defined and daclared with two elements"
);

var newArray = [];
for (let index = 0; index < 400; index + 1) {
  newArray.push("object"+index)
}
console.assert(
  newArray.length === 400,
  "newArray should be an array with 400 elements in it, use a loop!"
);

const dissidentDB = [
  {
    name: "ben",
    id: 98,
  },
  {
    name: "sam",
    id: 21,
  },
  {
    name: "faith",
    id: 43,
  },
];

//check the console error and see if the search function needs to be defined or not!
console.assert(
  search(dissidentDB, "ben") === true,
  "search function should return true if dissident with a given name exists!"
);
console.assert(
  search(dissidentDB, "made up") === false,
  "search function should return false if name doesn't exist"
);

//create a set of assertions to test ben's knowledge!
