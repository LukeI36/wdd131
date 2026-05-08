const current_year = document.querySelector("#currentyear");
const today = new Date()

current_year.innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;
