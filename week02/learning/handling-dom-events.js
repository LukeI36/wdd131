/**
Handling DOM events are also a really important skill to have when making interactive webpages. Learning how to handle them and pass data from one place to another are essencial when it comes to dynamic web design.

Events are things that happen in the system you are programming—the system produces (or "fires") a signal of some kind when an event occurs, and provides a mechanism by which an action can be automatically taken (that is, some code running) when the event occurs. Events are fired inside the browser window and tend to be attached to a specific item that resides in it.

A very important method used to make interactive elements in a webpage is the .addEventListener(). It takes 2 arguements, the event name and the function that will be executed when the event triggers. The function goes by the name of "event handler" or "callback function".



Common DOM event concepts and use cases. There are many more events that can be done, but these are just a few:

Click Event:
Triggered when the user clicks on a element. Used for buttons, links, or anything involving a mouse click.

ex: 
buttonElement.addEventListener('click', function() {
  // Code to execute when the element is clicked
});

attributes:
'click' = event type
function() = function that will be executed when event is triggered.


KeyUp Event:
Triggers when the key is released. Useful for handling keyboard inputs.

ex:
buttonElement.addEventListener('keyup', function() {
  // Code to execute when a key is released
});


DOMContentLoaded Event:
Triggered when the HTML document has been completely parsed (analysed) and all deferred scripts have been executed. It's widely used for initializing JavaScript applications.

ex:
document.addEventListener("DOMContentLoaded", function() {
  // Code to execute when the DOM is parsed
});


*/