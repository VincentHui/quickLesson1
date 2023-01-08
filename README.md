# quickLesson1

A quick lesson for simple source control and coding. The first few steps will be dealing with using the cmd line and git. These are two essential tools for modern code development! Afterwards we will be updaing this repo to add source code for simple logic and applications to teach the simple principles of logic

1. if you've installed WSL open the ubuntu terminal. Follow this article to get to grips with installing and opening WSL
   https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-10#1-overview

2. we neeed to access the C drive through WSL. This means mounting the C drive. If you know some cmd line it should be easy to do. we're going to change the directory and then list the contents, something like this to get to the c drive:
   <br/>`$ cd /mnt/c`
   <br/>then to list contents of the current folder
   <br/>`$ ls`
   <br/>and the contents of the c drive can be seen (I plan on using this location for cloning the repo)
   <br/>see the below link for more info and help
   <br/>https://superuser.com/questions/1107618/where-is-the-c-drive-in-the-wsl

3. clone this repo into the c drive now that we have navigated to the c drive folder using the cmd line within WSL. With cmds like the following
   <br/>` $ git clone git@github.com:VincentHui/quickLesson1.git`

Proof ben can use git:
Franz Ferdinand gets a sandwich
Proof sam can use git:
Franz Ferdinand gets shot
Franz Ferdinand gets shot

# First Homework

So we can create a way to assign values, define variables, read strings and then react to strings with a conditional statement. Next we are going to make a way to detect certain words. Using string.includes see if you can detect if certain words are inputed by the user. Heres some pseduo code as hint to help you guys (pseudo code means its just rough code from my head not JS or anything useful!)

`if(input.includes(poo)){
  log(don't say poo!)
}`

the following link here has some good references to the javascript string.include method
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

## Extra

defne a function called `myFirstFunction` which when called prints the line "line1" and then "line2", then call this function.

# Second Homework

I've managed to get both of you guys up to date with functions reasonably well. So this homework will mix in some of the stuff we've done with variables, functions and if statements. The harder stuf will be marked as extra! Remember there is two ways of defining functions

1. Using the keyword javascript has for defining functions called `function`

`function MyFunctionName(paramter1, parameter2){
  //function logic in here
  //no return statement means that it returns nothing when called!
}
`

`function FunctionWhichAddsAndReturns(paramter1, parameter2){
  return parameter1 + paramter2
}
`

2. Using arrow functions

`const MyfunctionName = (paramter1, paramter2)=>{
  //function logic in here
  //no return statement means that it returns nothing when called!
  }
`
`const FunctionWhichAddsAndReturns = (paramter1, parameter2)=>{
  return parameter1 + paramter2
}
`

or do it in one line which is called an inline function

`const MyfunctionName = (paramter1, paramter2)=>//inline logic`
`const FunctionWhichAddsAndReturns = (paramter1, parameter2)=>parameter1 + paramter2`

Notice how it almost looks like a variable assignment!

Now on to some homework:

1. define functions using the function keyword with whatever name you want that adds, subtracts, multiplies and divides two parameters. Make sure it returns the result and if you want to test it console.log the returned result of the function!
2. Do the same as step 1 but with arrow functions extra points if you can inline it (do it in one line)
3. Assign a variable to the returned result of a called function and console.log the result something like `var myVariable = addFunction(1,3)` then console.log the variable
4. Define a function called `AdditionAndMultiplication` it will take in two parameters then store the called value of the add function on these two parameters and then store the called value of the mutltiplication functions. Something like `function AdditionAndMultiplication(arg1, arg2){var result =add(); var result2=multiply();}`. Then while still in the scope of the function console.log the variables and make sure the function returns nothing
5. Define a function called any name you want. It will take in a string and check the strings length, if the string is over a certain length it will console.log "TOO LONG". Draw on your previous experience! Remember parameters can be any name and type because JS is not type safe! (extra is to return the boolean result of it being too long)
6. Define a function of any name that will take in 9 parameters and add them together

Next lesson I will go over the homework and all the different ways the homework can be answered and then definitions, types, functions and function signatures in more detail!

# Third Homework

We've gone other functions, types, assignments and declarations the next piece of homework will test a little bit of what we've done so far

1. Declare a variable with any name. After the declaration asign it a string value
2. Declare and assign a variable with any name with a number type
3. Declare a variable called AddFunction and assign it the value of a function which will take two parameters and return the added results of two parameters
4. Declare a varible called AddResult. Then in the next line Assign it the value of Addfunction after calling it with any two parameters. Then in the next line assign it the new value of 5+4.

# Fourth Homework

ComplianceEnforcer.js has been added to the Sam folder for sam, combatRobot has been added to the Ben folder for ben. They each contain a set of assertions on a object literal, your goal is to make sure that the assertions pass and that the bugs are fixed! Pay attention to errors and failed assertions in the console and if you can, complete the bonus objectives!

to run combatRobot run the following
`node combatRobot`

to run ComplianceEnforcer run the following
`node ComplianceEnforcer`
