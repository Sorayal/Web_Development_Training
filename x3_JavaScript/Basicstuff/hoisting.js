/* 
The declaration of bar happens at top and bar will be initialized with 'undefined'
Can be only done with 'var'. With 'let' and 'const' this weird behavior won´t work. 
It will response with reference error. Hoisting == hochziehen, can be done with 
variables and functions.
*/

let fa = "Moin";

console.log(bar);
console.log(fa);

var bar = "Hello";
