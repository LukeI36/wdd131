/*
Functions are not just an important part of JavaScript, but to all programming languages. Functions allow you to reuse certain sections of JavaScript code by calling the function name. Functions are able to recieve input and return an output.





Function definition:
A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

-The name of the function.
-A list of parameters to the function, enclosed in parentheses and separated by commas.
-The JavaScript statements that define the function, enclosed in curly braces, {  …  }

ex:
function square(number) {
  return number * number;
}

This function called 'square' gets the input parameter value of 'number' and returns with an output of the 'number' times itself.

Unlike Python, if a function changes a value of an already declared variable, that variable's value will be changed through the entire program. Same thing goes with arrays.

example 1:
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(myCar.make); // "Honda"
myFunc(myCar);
console.log(myCar.make); // "Toyota"

example 2:
function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30


Functions are also able to be nested in other function, forming what they call a scope chain:

ex:
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}





Function Expressions (most of this is from the lesson because I don't understand):

While the function declaration above is syntactically a statement, functions can also be created by a function expression.

Such a function can be anonymous; it does not have to have a name. For example, the function square could have been defined as:

ex:
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16


However, a name can be provided with a function expression. Providing a name allows the function to refer to itself, and also makes it easier to identify the function in a debugger's stack traces:

ex:
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6


Function expressions are convenient when passing a function as an argument to another function. The following example defines a map function that should receive a function as first argument and an array as second argument. Then, it is called with a function defined by a function expression:

ex:
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const numbers = [0, 1, 2, 5, 10];
const cubedNumbers = map(function (x) {
  return x * x * x;
}, numbers);
console.log(cubedNumbers); // [0, 1, 8, 125, 1000]

The example above shows that the cubedNumbers variable equals to the map function. two parameters are passed to the map function, function(x), which is a function that returns x*x*x, and the numbers array. In the map function, a new array the same length as numbers is formed to store the cubed numbers, iterating through the length of numbers, result[i] = the function(number[i]), which basically means that result[i] = (a[i] * a[i] * a[i]).


In JavaScript, a function can be defined based on a condition. For example, the following function definition defines myFunc only if num equals 0:

let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}





Arrow functions:
An arrow function expression (also called a fat arrow to distinguish from a hypothetical -> syntax in future JavaScript) has a shorter syntax compared to function expressions. Arrow functions are always anonymous.

There are two types of arrow functions, short functions and non-binding functions.

short functions:

ex:
// The regualar way
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // [8, 6, 7, 9]

// the short function way
const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]

basically allows you to run/call functions on one line, but there are a few keywords you cannot use unless you use the longer version, such as 'this'.


bound functions:
ex:
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` properly refers to the person object
  }, 1000);
}

const p = new Person();

allows you to use 'this'





Calling Functions:
while defining a function does not run the function, calling it does.

ex:
square(5); // calls and runs the square function.

functions are objects.

functions must be declared before being called, meaning it's best to have function definitions near the top of the so that they can be called later.

You are able to put the a function into itself in order to repeat the function. These are called recursion functions:

ex:
function loop(x) {
  // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
  if (x >= 10) {
    return;
  }
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);





In conclusion:
Declarations are hoisted and named; function expressions assign a function to a variable; arrow functions are expressions with concise syntax and lexical this (no own this or arguments).
*/