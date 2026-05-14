const current_year = document.querySelector("#currentyear");
const today = new Date()

const ham_Button = document.getElementById("menu")
const navigation = document.getElementById("navigation")

//for hamburger button function
ham_Button.addEventListener("click", function () {
    navigation.classList.toggle("open");
    ham_Button.classList.toggle("open");
})


//For footer modified time
current_year.innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;


