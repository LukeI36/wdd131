// Welcome message
const welcomeMessageOutput = document.getElementById("welcome");
let visits = Number(window.localStorage.getItem("visits-ls")) || 0;

if (visits !== 0) {
    welcomeMessageOutput.textContent = "Welcome back";
}
else {
    welcomeMessageOutput.textContent = "Welcome";
}

visits++;
localStorage.setItem("visits-ls", visits);

// Display user name
const nameOutput = document.getElementById("user-name");
let name = window.localStorage.getItem("name-ls") || "";

if (name === "") {
    nameOutput.textContent = " ";
}
else {
    nameOutput.textContent = ` ${name}`;
}