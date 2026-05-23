/*
Javascripts are what keep related data and function bundle up together.

quote:
"An object is a collection of related data and/or functionality. These usually consist of several variables and functions (which are called properties and methods when they are inside objects)." – MDN

instead of storing related data in parallel arrays, you can use objects, which are more readable, stable, and maintainable.

Objects in js are similar to dictionaries in python. If I remember correctly, they are also similar to classes in C++ as well.

Objects contain pairs of key:value. The key (left side) is the name which can later be called to get the value of that key (basically the variable name). You may need to put quotes around the key if it has a space in the name. Value (right side) is what the key holds. It can be any value, arrays, other objects, functions, etc.

Keys that store data are called properties and keys that store functions are called methods.

ex:
let person = {
  name: "Antonia Francesca",
  age: 30,
  profession: "Software Engineer",
  hobbies: ["reading", "playing guitar", "hiking"],
  address: {
    street: "123 Camino Real",
    city: "Santa Rosa",
    country: "Honduras"
  },
  isEmployed: true,
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

You are able to access properties and invoke methods of an object by using [] or dot notation.

examples:
console.log(person['isEmployed']);   // bracket notation
//grabs the property 'isEmployed' from the 'person' object and prints it.

console.log(person.hobbies[0]);   // dot notation
//grabs the property 'hobbies' from the 'person' object, finds the 0 index value in the hobbies array (which is "reading") and prints it.

console.log(person.age);   // dot notation
//grabs the property 'age' from the 'person' object and prints it.

console.log(person['address'].city);   // combined notation
//grabs the property 'address' from the 'person' object, from that array, it grabs the "city" property, then prints it.

You are also able to update/change the value of a property later in your code.

ex:
person.age = 31;





*/
