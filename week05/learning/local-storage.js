/*
We will learn what the purpose is to local storage and how to use it to display client specific data.

Advantages to local storage:

- More intuitive than older cookies
- Only stores strings in key-value pairs (remember key and values from python)
- Data persists indefinitely without expiring and remains available even after the browser is closed and reopened.

To store non-string data in localStorage, use JSON.stringify() to convert the data to a string before storing, then use JSON.parse() to convert it back when retrieving. This approach allows you to store and retrieve complex data structures like objects and arrays.











*/ 