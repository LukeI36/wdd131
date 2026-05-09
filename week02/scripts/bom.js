const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector('ul');

button.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        //  /\.trim gets rid of whitespace in the end and start of a string

        const li = document.createElement("li");
        li.textContent = input.value;

        const delete_button = document.createElement("button");
        delete_button.textContent = "❌";
        delete_button.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });


        li.append(delete_button);
        list.append(li);
        input.value = "";

        input.focus();
    }
    else {
        input.focus();
    }
});



/*
You need to consider screen readers and how they will interpret content. For example, the delete button only displays an emoticon and may not be correctly identified by screen readers as a button to remove a chapter. What can we do? One solution is to add an aria-label attribute to the button with a value like "Close" or "Remove Alma 5". The aria-label attribute defines a string value that labels the element for assistive technologies.

<button aria-label="Close" id="close-button">❌</button>

This helps screen readers understand the button's purpose, making your application more accessible.

*/



