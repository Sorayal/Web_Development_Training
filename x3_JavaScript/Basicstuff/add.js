"use strict";

/**
 * Semicolons are optional in JavaScript. With a line break in the function,
 * the code will lead to undefined surprisely. A function with no return or
 * with return only will give an undefined. left + right is unreachable code
 * now.
 * The solution is to put brackets behind return here to keep the expression
 * together. The opening bracket has to be in the same line as return
 *               Like: return(
 *                      left + right);
 *
 *
 * The number of parameters hasn´t be equal to the number of given argumments.
 * Unlike in Java functions can be called with less arguments. The rest of free
 * parameters will be undefined then. number + undefined leads here to NaN , Not
 * a number.
 *
 * Additional parameters can be defined as an parameter array: function add(2, 3, ...parameters)
 */

const addExpression = function (left, right) {
  return;
  // unreachable code here.
  left + right;
};

const sumExp = addExpression(26, 40);
console.log(sumExp);

//--------------------------------------------------------------------

const addExpressionFixed = function (left, right) {
  return left + right;
};

const sumExp2 = addExpressionFixed(20);
console.log(sumExp2); // Not a number. Second parameter is missing.

//--------------------------------------------------------------------

// ...numbers is an array here.
const addExpressionArray = function (left, right, ...numbers) {
  let sum = left + right;
  // for every number in array 'numbers', add it to sum and iterate over each
  // element within the given array. The variable 'number' is like an index 'i'.
  for (let number in numbers) {
    sum += numbers[number];
  }

  return sum;
};

const sumExp3 = addExpressionArray(2, 3, 4, 5);
console.log(sumExp3);

//--------------------------------------------------------------------
// Function example with optional parameter

const addExpressionOpt = function (left, right) {
  // evaluates right if it´s empty. If so, the result will be falsy and 0 will be used then.
  // careful! Don´t forget the brackets around right or 0.
  return left + (right || 0);
};

console.log(addExpressionOpt(20)); // 20
console.log(addExpressionOpt(20, 15)); // 35

// second option for optional parameters
// if no second argument is given for 'right', 0 will be taken then.
const addExpressionOpt2 = function (left, right = 0) {
  return left + right;
};

console.log(addExpressionOpt2(20)); // 20
console.log(addExpressionOpt2(20, 15)); // 35

//--------------------------------------------------------------------
