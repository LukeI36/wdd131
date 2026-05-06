/*
Variables are used to store values. These values can be primitive, such as a number, string, Boolean, or null, or they can be objects, such as a function, class, or literal object. These stored values can be used as input to expressions, in processing, or in output to display information.

variables allow you to store and display changeing information.


Some questions and answers to lesson questions:

1. What is the difference between const and let?

Both are used in the beginning of a line in a JavaScript file in order to make variables. 

"let" type variables allow you to change/modify the value inside of the variable. To check, for debugging, a variable, you can write the variable name with a ; after and it will display the value of that variable in the console.

"const" type variables must be initiated (have a value) when you declare them and the value in the a const cannot be modified. If you ever have a variable that you don't want changed later, use const.

2. What is the data type of each of the following?
"101" = string
101 = number
true = boolean
null = null
undefined = undefined

3. Which should you use to wrap strings, single quotes('), double quotes("), or backticks(`)?
In JavaScript, you can use single quotes ('), double quotes ("), or backticks (`) to define string literals.
The most common approach is to use single quotes.

4. What is a template literal and why is it used to build strings?
Template literals are string literals that allow embedded expressions. They are enclosed by backticks (`) instead of single or double quotes. Template literals can contain placeholders, which are indicated by a dollar sign and curly braces ${expression}.

ex: 
let name = 'Alicia';
let age = 25;
let message2 = `My name is ${name} and I am ${age} years old.`;

basically, it allows you to add variable values into the middle of a string that can then be printed/displayed.


variable types:

intergers = whole numbers
floats = numbers with decimals
You do not need to declare if a number is int or float
ex: let myAge = 17;


string = a combination of characters, or words
You need "" or '' around the value you want to be a string
ex: let dolphinGoodbye = "So long and thanks for all the fish";


boolean = true or false
ex: let iAmAlive = true;
ex: let test = 6 < 3;


array = objects that contain multiple values
ex: let myNameArray = ["Chris", "Bob", "Jim"];
ex: let myNumberArray = [10, 15, 40];

To access a value from a array:
ex: myNameArray[0]; // should return 'Chris'
ex: myNumberArray[2]; // should return 40


objects = contains variables with names
ex: let dog = { name: "Spot", breed: "Dalmatian" };

to get variable out of object:
ex: dog.name;


Null = a variable that can onlu have on value, null.
Undefined = a variable with no value
both often cause Errors


JavaScript is a dynamically typed language, meaning you don't need to specify what data type a variable will contain

typeof displays the value of a variable
ex: let myNumber = "500";
typeof myNumber; // prints 500

Importand rules to naming variables:
-stick to just using Latin characters (0-9, a-z, A-Z) and the underscore character.
-You shouldn't use other characters because they may cause errors or be hard to understand for an international audience.
-Don't use underscores at the start of variable names — this is used in certain JavaScript constructs to mean specific things, so may get confusing.
-Don't use numbers at the start of variables. This isn't allowed and causes an error.
-A safe convention to stick to is lower camel case, where you stick together multiple words, using lower case for the whole first word and then capitalize subsequent words. We've been using this for our variable names in the article so far.
-Make variable names intuitive, so they describe the data they contain. Don't just use single letters/numbers, or big long phrases.
-Variables are case sensitive — so myage is a different variable from myAge.
-One last point: you also need to avoid using JavaScript reserved words as your variable names — by this, we mean the words that make up the actual syntax of JavaScript! So, you can't use words like var, function, let, and for as variable names. Browsers recognize them as different code items, and so you'll get errors.

Good examples:
age
myAge
init
initialColor
finalOutputValue
audio1
audio2

Bad examples:
1
a
_12
myage
MYAGE
var
Document
skjfndskjfnbdskjfb
thisisareallylongvariablenameman



Bonus notes: 
to change a variable string to number, use parseInt(string-variable-name)
*/