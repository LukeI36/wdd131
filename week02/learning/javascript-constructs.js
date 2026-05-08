/*
Operations:
In programming, operators are symbols used to perform operations on operands (variables and values) and to process expressions. Many operators perform mathematical work such as addition, subtraction, multiplication, and division. Others handle assignment, comparison, and logical operations.

Ones I already know:
=: Assigns a value to a variable
+=: Adds a value to a variable
-=: Subtracts a value from a variable
*=: Multiplies a variable by a value
/=: Divides a variable by a value
%=: Assigns a remainder to a variable
**=: Exponentiates(powers) a variable by a value

Ones I didn't know:
&&=: Logical AND assignment
||=: Logical OR assignment

You can write javascript code in Devtools by going into the console section

Key points:
-The = operator assigns a value; it does not check equality
-The variable name goes on the left side
-The value (literal value, variable, or expression) to assign goes on the right side
-After assignment, the variable stores the value and can be used throughout your program





Arithmetic Operators:
arithmetic operators are used to do arithmetic equations (math)

+ = addition
- = subtraction
* = multiplication
/ = division
% = modulus(Remainder)
** = Exponentiation(Power)

Key Points:
-Arithmetic operators are used to perform mathematical calculations
-They can be used with both literal values and variables
-Operator precedence determines the order of operations in complex expressions





Comparision Operators:
Comparision Operators are used to compare two values and returns a bool of true or false based on the comparison.

==: Equal to
ex: x == y | true if x is equal to y

===: Strict Equal to
ex: x === y | true if x is equal to y and they are of the same data type

!=: Not Equal to
ex: x != y | true if x is not equal to y

!==: Strict Not Equal to
ex: x !== y | true if x is not equal to y or they are of different types

<: less than
ex: x < y | true if x is less than y

<=: Less than or equal to
ex: x <= y | true if x is less than or equal to y
*/

ex:
let x = 10
let y = 5
z = x + y
console.log(z == 15) // true
console.log(z == "15") // false
console.log(x < y) // false

/*
Key Points:
-Comparison operators return boolean values (true/false)
-They are commonly used in conditional statements and loops to control program flow
-Strict equality (===) checks both value and type, while loose equality (==) checks only value





Logical Operations:
Logical operators are used to combine multiple boolean expressions and return a boolean value based on the compounded logical operation.

&&: Logical AND
ex: x && y | true if both x and y are true

||: Logical OR
ex: x || y | true if either x or y is true

!: Logical NOT
ex: !x | true if x is false; false if x is true
*/

ex:
let a = true;
let b = false;
let c = a && b;
console.log(c) // false
let d = a || b;
console.log(d) // true
let e = !a;
console.log(e);

/*
Key Points:
-Logical operators are used to combine or invert boolean expressions
-They are essential for controlling program flow in conditional statements and loops
-Short-circuit evaluation with && and || stops evaluation as soon as the result is known





Expressions:
expressions is a combination of values, variables, operators, and functions to evaluate and produce a single value. Expressions are used to perform calculations, make decisions, and manipulate data in programming.

Arithmetic Expressions: These expressions involve arithmetic operators (such as +, -, *, /) to perform mathematical calculations.
ex: let result = (5 + 3) * 2;

String Expressions: These expressions involve string concatenation or manipulation using the + operator or string methods.
ex: let greeting = "Hello " + "world!";

Logical Expressions: These expressions use logical operators (such as &&, ||, !) to evaluate boolean values.
ex: let isAdult = age >= 18 && hasID;




Decisions:
Condistional structures are used to make decisions and are only executed when certain conditions are met (if, else, else if, etc.)



if statement: Executes a block of code if a specified condition is true.
if (condition) {
  // Code to execute if the condition is true
}



else statement: Provides an alternative block of code to execute if the condition in the if statement is false.
if (condition) {
  // Code to execute if the condition is true
} else {
  // Code to execute if the condition is false
}



else if statement: This structure allows for the checking of multiple conditions in sequence.
if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition2 is true
} else {
  // Code to execute if none of the conditions are true
}

ex:
let age = 65;
if (age < 13) {
  console.log("Price: Child — you get a discount.");
} else if (age <= 64) {
  console.log("Price: Adult — you pay full price.");
} else {
  console.log("Price: Senior — you get a discount.");
}



Switch Statements: Provides a way to execute selective blocks of code based on the value of an expression.
switch (expression) {
  case value1:
    // Code to execute if expression is equal to value1
    break;
  case value2:
    // Code to execute if expression is equal to value2
    break;
  // ... more cases ...
  default:
    // Code to execute if none of the cases match
}

ex:
let day = 3;  
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}





Loops are used to repeat a block of code multiple times until a specified condition is met. The most common loop structures in JavaScript are the for loop, the while loop, and the forEach loop.



for Loop: Repeats a block of code a specified number of times.
for (let i = 0; i < 10; i++) {
  // Code to execute in each iteration
}

ex:
for (let i = 0; i < 10; i++) {
  // Code to execute in each iteration
}



while Loop: Repeats a block of code as long as a specified condition is true.
while (condition) {
  // Code to execute while the condition is true
}

ex:
let count = 0;
while (count < 5) {
  console.log("Count is: " + count);
  count++;
}



forEach Loop: Used with arrays; it iterates over each element of the array.
array.forEach(function(element) {
  // Code to execute for each element
});

ex: 
let fruits = ["apple", "banana", "cherry"];
fruits.forEach(function(fruit) {
  console.log("Fruit: " + fruit);
});

*/