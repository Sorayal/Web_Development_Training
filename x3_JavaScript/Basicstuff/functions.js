"use strict";

/**
 * function data type
 *
 * function statement , function expressions
 *
 * The function add is a function statement here. The order does not matter. When a javascript file is loading,
 * the file will be scanned for all function statements to collect them. So the definiton of the function can
 * be also at the end of the javascript file. It´s not like in C for instance where you have to declare function
 * prototypes at the beginning of a file.
 *
 * Function statements are limited in their place to use. Function expressions can be used everywhere.
 *
 */

// function statement
const sumStat = addStatement(20, 40);
console.log(sumStat);

function addStatement(left, right) {
  return left + right;
}

// function expression
// changing the order won´t work with function expressions.
// If the assignment happens after the function call, an error will
// appear there. This is the difference to function statements.
const addExpression = function (left, right) {
  return left + right;
};

const sumExp = addExpression(26, 40);
console.log(sumExp);
