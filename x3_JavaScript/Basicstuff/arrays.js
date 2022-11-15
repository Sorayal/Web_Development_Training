"use strict";

/**
 * There is no dedicated type for arrays in JavaScript. Actually they are
 * also objects.
 */

const primes = [2, 3, 5, 7, 11, 13];
console.log(typeof primes); // object
console.log(primes[-1]); // undefined
console.log(primes); // [2, 3, 5, 7, 11, 13]
