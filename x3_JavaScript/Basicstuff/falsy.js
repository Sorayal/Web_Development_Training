"use strict";

/* 
Falsy values
They are like in Python, and not like in Java which handles only real 
boolean type. 
 
Falsy values:
'' - empty string
"" - empty string
0 - 0 as number
false as boolean - false truth value
undefined - just undefined
null - just null
*/

let test = undefined;

// JavaScript will look if undefined belongs to the falsy values.
if (test) {
  console.log("some code");
} else {
  console.log("not going happen here!");
}

let firstNumber = 21;
let secondNumber = 79;

// gives the last value which was evaluated as truely
let result = firstNumber || secondNumber;
console.log(result);

firstNumber = 0;
// First number is falsy, so the second number will be taken to print the result.
// Can be used as fallback instead of if statement.
result = firstNumber || secondNumber;
console.log(result);
