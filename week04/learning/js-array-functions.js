/*
From lesson:
Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. It is a declarative programming paradigm, which means you express your program through expressions or declarations rather than statements. Array methods that support functional programming, like filter(), map(), reduce(), etc.



array.filler():
array.filler() method makes a new array that contains elements that only meet specific conditions

ex:
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

the example above makes a new array using .filter(), where words in the 'words' array the are longer than 6 characters are added to the new array.

You can also use a function as the condition
ex:
function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

for more info:
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter



array.map():
array.map() method transforms each element of an array using a provided function and makes a new array of the modified elements. The orginal array is not modified and the new array has the same number of elements as the orginal array.

ex:
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

for more info:
Refernece: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map



array.reduce():
from lesson:
The array.reduce() method reduces an array to a single value by executing a reducer function on each element. The reducer function takes four arguments: accumulator, current value, current index, and source array. The function's returned value updates the accumulator, which is carried through each iteration and becomes the final result.

I honestly don't understand what this means

ex:
const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

for more info:
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

from reference:

-callbackFn
A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce(). The function is called with the following arguments:

-accumulator
The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

-currentValue
The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

-currentIndex
The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.

-array
The array reduce() was called upon.

-initialValue
A value to which accumulator is initialized the first time the callback is called. If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue. If initialValue is not specified, accumulator is initialized to the first value in the array, and callbackFn starts executing with the second value in the array as currentValue. In this case, if the array is empty (so that there's no first value to return as accumulator), an error is thrown.



Another example from lesson:

names.reduce((total, name) => total + name.length, 0) / names.length;

The initial value for the accumulator is set to 0. Inside the reducer function, total represents the accumulated sum of string lengths, and name represents each individual name in the array. The reducer function adds the length of each name to the total in each iteration (equivalent to total += name.length).


https://codepen.io/BYU-Idaho/pen/raNYBVx?editors=1010
*/ 