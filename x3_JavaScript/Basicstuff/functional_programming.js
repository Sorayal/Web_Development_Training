'use strict'

/**
 * Demo for functional programming
 * Functions can be used as arguments like strings or numbers.
 */

const add5Func = function(n){
    return n +5;
}

/**
 * Gets function for adding numbers which can be used in a generic way.
 * getAddX is a higher order function which returns itself a function.
 * 
 * External function (Funktion höherer Ordnung) higher order function
 * Inner function (Funktionsabschluss) : Closure
 * 
 * The closure or inner function would have access to all local variables
 * which a defined in the higher order function and has also access to the
 * given argument which is at the parameter of the higher order function.
 * 
 * This is a kind of encapsulation of data within a function.
 */
const getAddX = function(x){
    return function(n){
        return n + x;
    };
}

const getRandomFuncUpperBound = function(){
    return function(n){
        return Math.floor(Math.random() * n);
    }
}

/**
 * add5 is a function, not a result.
 */
const add5 = getAddX(5); // n + 5;

console.log(add5(5)); // n + 5 and n = 5 => 10

const add7 = getAddX(7); // n + 7;

const sum = add5(9); // x = 5 and n = 9 => sum = 14

/**
 * Assigning the random function and using it in combination with 
 * a upper bound to get a random number result.
 */
const randomUpperBound = getRandomFuncUpperBound();
const upper = 11;
//console.log(randomUpperBound(upper));
console.log(`Random number between 0 and ${upper} is: ${randomUpperBound(upper)}`);

// -------------------------------------

const primes = [2, 3, 5, 7, 11];

/**
 * Doubles the values of the prime array
 */

const getDouble = function(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const double = item * 2;
        result.push(double);
    }
    return result;
}

/**
 * Alternative higher order function with slightly different closure
 * @param {the array which should be doubled} arr 
 * @returns - doubled array
 */
const getDoubleAlt = function(arr) {
    const result = [];
    for (let i = 0; i < arr.length;i++ ){
        result[i] = arr[i] * 2;
    }
    return result;
}

const resultArr = getDouble(primes);
const resultArr2 = getDoubleAlt(primes);
console.log(resultArr);
console.log(resultArr2);

/**
 * 
 * @param {the array with values which should be modified} arr 
 * @param {the function to modify the values} fn 
 * @returns - the modified array
 */
const getMultipleOfArrayValuesGeneric = function(arr, fn) {
    const result = [];
    // For each element take the element and call the given function fn to modify the value.
    for(let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const double = fn(item);
        result.push(double);
    }
    return result;
}

const doubleValue = function(n){
    return 2 * n;
}

const powThree = function(n){
    return Math.pow(n, 3);
}

// give the primes array and the function doubleValue
const resultArr3 = getMultipleOfArrayValuesGeneric(primes, doubleValue);
console.log(resultArr3);

// give the primes array and the function powThree
const resultArr4 = getMultipleOfArrayValuesGeneric(primes, powThree);
console.log(resultArr4);