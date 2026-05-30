/*
Callback functions are a powerful feature in JavaScript.

"A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action."

There are two types of callback functions, synchronous and asynchronous. Synchronous callback functions are called right after declaring the outer function. Asynchronous functions are called later and are not called immediately.

ex:
let value = 1;

doSomething(() => {
  value = 2;
});

console.log(value); // 1 or 2?

If doSomething calls the callback synchronously, then the last statement would log 2 because value = 2 is synchronously executed; otherwise, if the callback is asynchronous, the last statement would log 1 because value = 2 is only executed after the console.log statement.

Examples of synchronous callbacks include the callbacks passed to Array.prototype.map(), Array.prototype.forEach(), etc. Examples of asynchronous callbacks include the callbacks passed to setTimeout() and Promise.prototype.then(). Here are example implementations of doSomething that call the callback synchronously and asynchronously:

// Synchronous
function doSomething(callback) {
  callback();
}

// Asynchronous
function doSomething(callback) {
  setTimeout(callback, 0);
}

Honestly, just read the article from the website: https://blog.devgenius.io/array-callback-methods-arrow-functions-9ecbd728f63

Arrow Functions are really helpful when it comes to calling callback functions

To turn a callback function using a arrow function you need to remove the function keyword and write the function definition after arrow (=>)

regular callback function:
const square = function(num) {
    return num * num;
}

callback function with arrow function:
// Arrow function
const square = (num) => {
    return num * num;
}
// Without parenthesis
const square = num => {
    return num * num;
}
// Implicit Return - one liner
const square = num => num * num;



One last example:

function fetchData(callback) {
  // using setTimeout to simulate fetching data from a server
  setTimeout(() => {
    // This calls the 'callback' function and passes data to it.
    callback('Data has been fetched');
  }, 2000); // This simulates a 2-second delay from a service.
}

// function that processes the data
function processData(data) {
  console.log("Data received:", data);
}

// Call the fetchData function and pass the processData function as an argument.
fetchData(processData);

The fetchData function simulates server data fetching using setTimeout to create a 2-second delay. After the delay, it invokes the callback function, passing 'Data has been fetched' as an argument. In this example, processData is passed as the callback, and it logs the received data to the console when invoked.


*/ 