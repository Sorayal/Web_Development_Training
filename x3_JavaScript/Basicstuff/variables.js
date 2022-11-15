// strict mode, has to be put in every file where it´s needed.
"use strict";

/* 
Variables 

Difference between local and global variables.

Using const for constants.

*/

// global variable , not recommended
// Reference error will happen here because in line 15 it´s redeclared again
//x = 42;

// local variable
let x = 42;

console.log(x);

// constants to keep a static value
// using more const rather then let is recommended.
const PI = 3.14;
console.log(PI);
