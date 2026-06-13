// Menu
const top_menu = document.getElementById("top-menu")
const ham_Button = document.getElementById("menu")
const navigation = document.getElementById("navigation")

ham_Button.addEventListener("click", function () {
    top_menu.classList.toggle("open")
    navigation.classList.toggle("open");
    ham_Button.classList.toggle("open");
})

//Get user name and display complete message
const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
    if (form.checkValidity() == true) {
        const name = document.getElementById("your-name");
        let create_username_ls = window.localStorage.getItem("name-ls") || "";
        localStorage.setItem("name-ls", name.value);
    }
});