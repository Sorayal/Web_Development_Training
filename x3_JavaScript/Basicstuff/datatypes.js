/*
Variable datatypes
JavaScript has a dynamic data type which is dependent on the value. 
It´s not like Java where you have to define a datatype while declaring 
a variable. Python has also a dynamic data type system.

There are 8 datatypes in JavaScript:
number, boolean, string, object, undefined, null

number is a floating point type of double.
strings are 

Two general type definitions:
Value type: number, boolean, undefined, null
managed on stack memory.

Reference type: string, object
managed on heap memory.
Like in Java.

*/
surname = "Maru";

// typeof is an operator, not a method call
console.log(typeof "String"); // string
console.log(typeof "String"); // string
console.log(typeof `Hello ${surname}, welcome to JavaScript.`); // Template strings for expressions
console.log(`Hello ${surname}, welcome to JavaScript.`); // since ECMA 2015

console.log(typeof 20); // number
console.log(typeof 20.0); // number

console.log(typeof true); // boolean true:false

console.log(typeof undefined); // type = undefined and value undefined

// null is a type of object, this is an error which will be kept due to compability. But null is a value type.
console.log(typeof null);

console.log(typeof new Object()); // object
list = ["Item1", "Item2", "Item3"];
console.log(typeof list); // object
console.log(list[1]); // Item 2

// Infinity: Definition from IEEE where Division with 0 is infinity (mathematical not defined)
console.log((result = 23 / 0));

// Check Equality of Reference and Value
// Reference check:
// In this case the first string would exist already on heap, so the second string will have the same identity/ reference like the first string.
console.log("Hello" == "Hello"); // true

// Value check
console.log(2 == 2); // true

// transform the number to string and does the equality check
// this is not like in Java
console.log(2 == "2"); // true

// if JavaScript fails to convert, it tries to call valueOf
console.log(0 == ""); // true
zero = 0;
zeroString = "";
console.log(zero.valueOf());
console.log(zeroString.valueOf());

// typesafe equality check, no hidden transforming action will happen, use always === instead of ==
console.log(0 === "");

// typesafe not equality check
console.log(0 !== "");
