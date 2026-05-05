/* 
JavaScript is a popular, well-supported programming language used to create interactive and dynamic web pages, mobile apps, desktop applications, and more. It is a high-level, interpreted language designed to run in web browsers, and it can also be used on the server side with the help of technologies like Node.js.

JavaScripts principles and code structure is similar to python and C#


HTML is the structure of the website.
CSS is the style/look of the website.
JavaScript is the behavior of the website.

To make a new JavaScript file, use .js after the file name


JavaScript is able to add complex features to websites, such as displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc.

We can make it so users interact with the website and the website will store the user's response.

JavaScripts uses Application Programming Interfaces (APIs) to provide you with extra superpowers to use in your JavaScript code. APIs are ready-made sets of code building blocks that allow a developer to implement programs that would otherwise be hard or impossible to implement.

There are two types of API:
1. Browser API are built into your web browser, and are able to expose data from the surrounding computer environment, or do useful complex things

lesson examples:
-The DOM (Document Object Model) API allows you to manipulate HTML and CSS, creating, removing and changing HTML, dynamically applying new styles to your page, etc. Every time you see a popup window appear on a page, or some new content displayed (as we saw above in our simple demo) for example, that's the DOM in action.
-The Geolocation API retrieves geographical information. This is how Google Maps is able to find your location and plot it on a map.
-The Canvas and WebGL APIs allow you to create animated 2D and 3D graphics. People are doing some amazing things using these web technologies — see Chrome Experiments and webglsamples.
-Audio and Video APIs like HTMLMediaElement and WebRTC allow you to do really interesting things with multimedia, such as play audio and video right in a web page, or grab video from your web camera and display it on someone else's computer (try our simple Snapshot demo to get the idea).

2. Third party APIs are not built into the browser by default, and you generally have to grab their code and information from somewhere on the Web.

lesson examples:
-The Bluesky API allows you to do things like displaying your latest posts on your website.
-The Google Maps API and OpenStreetMap API allows you to embed custom maps into your website, and other such functionality.


You need to be careful when writing JavaScript code. It's a lightweight interperted language, meaning it starts at the top and goes to the bottom, going through each line individually



To implement JavaScript to a webpage, add the <script> tag at the bottom of the body in an HTML file. This ensures that all HTML elements are loaded before adding the JavaScript code.

You can write the JavaScript code in the HTML file or in an external file. It is encourage to write on an external file.

to add button behavior, add the following javascript code:

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}


IMPORTANT:
When adding a external js file, add the defer attribute to ensure all the html elements are loaded first before adding the javascript code.

ex: <script src="scripts/myscripts.js" defer></script>













*/
