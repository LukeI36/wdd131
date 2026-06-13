// Menu
const top_menu = document.getElementById("top-menu")
const ham_Button = document.getElementById("menu")
const navigation = document.getElementById("navigation")

ham_Button.addEventListener("click", function () {
    top_menu.classList.toggle("open")
    navigation.classList.toggle("open");
    ham_Button.classList.toggle("open");
})

//Message
const message = document.querySelector("h2");
let username = window.localStorage.getItem("name-ls") || "";

if (username !== "") {
    message.textContent = `Thank you ${username} for subscribing to our service. We will give you the latest news of the Transformers franhcise when they're announced.`;
}
else {
    message.textContent = `Thank you for subscribing to our service. We will give you the latest news of the Transformers franhcise when they're announced.`;
};