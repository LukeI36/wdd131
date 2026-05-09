/*
A important skill to have as a web developer is to know how to manipulate the Document Object Model (DOM), which is a javascript object that the browser creates after it parses (anaylize) the HTML document.

Manipulating the DOM means dynamically reading, editing, updating, or deleting elements and their CSS properties. The DOM is a tree-like representation of your page's structure and content nodes.

DOM allows you to change any property in the webpage (styles and tags), which could then be implemented into features. For example, you could have a button that turns the website from light mode to dark mode using DOM.

you can access every property of a HTML tag by using console.dir()

You are able to change webpage properties like the following examples:

document.title = "My Webpage" | changes the title tag in HTML to "My Webpage".

document.body.style.backgroundColor = black | changes the body tag's background color to black.

ex:
HTML:
<h1 id="welcome-msg">Welcome<h1>

js:
const username = "Luke";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;
                                    /\ if username is the same variable type and equals to "", then (?) append Guest, if not (:) then append the username variable. 

The example above has a h1 tag with the id "welcome-msg". In js, we form two new variables, one that contains a string call username, and one that contains the element that has the "welcome-msg" tag called welcomeMsg. The username is then added into welcomeMsg through textContent.






Common DOM manipulation concepts and use cases:

Select:
select an element from the document using the querySelector method. querySelector will find the first instance of the element you seek.

ex: const article = document.querySelector('article');
This line of code selects the first instance of an article element from the document and assigns it as a reference to the variable named article.



Change:
change the innerHTML property of an existing element

ex: article.innerHTML = 'innerHTML supports <strong>HTML</strong> tags. The textContent property does not.';
This line of code uses an existing variable that references a previously selected element and changes its innerHTML property value.


change the inline CSS style of an element

ex: article.style.textAlign = 'right';
This line of code changes the text-align CSS property of the selected element.


change an attribute of an element

ex: article.setAttribute('class', 'active');
This line of code adds a class attribute to the element and assigns it a value.

There is a better way to change/add the class attribute. An alternative way to change an element's class attribute is by directly manipulating the element's classList property.

ex: article.classList.add('active');

This method is often preferred for class manipulation because classList provides additional methods like add, remove, toggle, and contains, making it more convenient and expressive for managing classes.



Create:
create an element

ex: const paragraph = document.createElement('p');
This line of code creates a new <p> element and stores it in the variable named paragraph.



Append:
append content or elements to an element

ex: 
article.appendChild(paragraph);
article.append(paragraph, 'Hello World Addition!');
These lines of code add content to the end of the article element.

The append() method allows you to include multiple arguments to append to the element in the specified order.



Remove:
remove an element from the document

ex: 
article.removeChild(paragraph);
article.remove();
These lines of code remove the paragraph from the article and then remove the article itself.



*/