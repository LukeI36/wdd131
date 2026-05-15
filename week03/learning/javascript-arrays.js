/*
an array is able to store multiple values in a single variable and you are able to get each individual value of an array by using an index.

ex:
let scores = [100, 72, 83, 94, 88, 87];
let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana'];

array indexs start at 0 and the second element is 1 and so on.

ex:
let aScore = scores[0]; //equals 100

You can modify the value of an array index by doing the following:
scores[0] = 99;


Arrays can be iterated over using a classic for loop:
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

But it is better to use a forEach loop instead to iterate through them:
scores.forEach(function(score) {
  console.log(score);
});

You can also get the length of an array by using .length:
let numScores = scores.length; // The numScores variable is assigned the value of 6


Array Methods:

Arrays have several methods that can manipulate (change) them:

-scores.push(100); // Adds a new element to the end of the array
-scores.pop(); // Removes the last element from the array
-scores.shift(); // Removes the first element from the array
-scores.unshift(100); // Adds a new element to the beginning of the array
-scores.slice(2,3); // Returns a shallow copy from the start index up to, but not including, the end index
-scores.splice(2, 1); // Removes 1 element from the array starting at index 2
-scores.join(', '); // Transforms the array into a single string using a comma and space as the delimiter



*/