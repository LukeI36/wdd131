// Menu
const top_menu = document.getElementById("top-menu")
const ham_Button = document.getElementById("menu")
const navigation = document.getElementById("navigation")

ham_Button.addEventListener("click", function () {
    top_menu.classList.toggle("open")
    navigation.classList.toggle("open");
    ham_Button.classList.toggle("open");
})

//Get user name
const submit = document.getElementById("submit");
const form = document.getElementById("form");
const message = document.getElementById("complete")
submit.addEventListener("click", function () {
    if (form.checkValidity() == true) {
        const name = document.getElementById("your-name");
        if (name.value !== "") {
            let user_name = window.localStorage.getItem("name-ls") || "";
            localStorage.setItem("name-ls", name.value);
            message.innerHTML = `Thanks you ${user_name} for subscribing to our service. We will give you the latest news of the Transformers franhcise when they're announced.`;
        }
        else {
            message.textContent = `Thanks you for subscribing to our service. We will give you the latest news of the Transformers franhcise when they're announced.`;
        }

        form.textContent = ""

    }
})