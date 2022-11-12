const { question } = require("../vince/question.js");
var poo = "poo"
console.log("I AM THE BEST");
console.log("VINCE IS GAY");
console.log("PRESS SAVE LUL");
console.log(
  "I am a woman's rights. I have plowed and reaped and husked and chopped and mowed, and can any man do more than that? I am as strong as any man that is now'A former slave and one of the most powerful orators of her time, Sojourner Truth fought for the equal rights of Black women throughout her life"
);
console.log(
  "Sweet are the uses of adversity which, like the toad, ugly and venomous, wears yet a precious jewel in his head"
);

question("what do you think of Vince? ", (input) => {
    if (input.length == 0) 
    console.log("put in something dummy")
    if (input.includes(poo))
    console.log("do not say the word poo!")
    if (input.length > 0)
  console.log("you think Vince is " + input);
});
