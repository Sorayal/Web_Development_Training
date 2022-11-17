"use strict";

/**
 * Objects are also a datatype in Javascript. Object in JavaScript is a simple list of
 * key-value pairs. This is a big difference to objects from Java or C# where they are
 * instances of a class. This is likely to confuse a lot! In Python it would be called
 * dictionary.
 *
 * Key (property) is a string, the value can be any datatype.
 *
 * 'this' is a self reference to the object where the call happens.
 */

// Object with different datatypes as values: string, boolean, number, function
const company = {
  name: "Example AG",
  location: "Berlin",
  isActive: false,
  age: 20,
  fullName: function () {
    return `${this.name}`;
  },
};

console.log(company.fullName());
console.log(company.isActive);

// short definiton without function keyword
const company2 = {
  name: "Example2 AG",
  location: "Berlin",
  isActive: true,
  age: 20,
  // method shorthand syntax since ECMA 2015
  fullName() {
    return `${this.name}`;
  },
};

console.log(company2.fullName());
console.log(company2.isActive);

// Returns undefined if the key is not existing.
console.log(company2.ceo);

// after defining it, calling it, will work from here.
// The orders matter here.
company2.ceo = "Musk";
console.log(company2.ceo);

// setting up 'null', which indicates that there is no object,
// even not an empty object. Using null only where to expect objects.
// Otherwise use undefined.

const ship = null;
