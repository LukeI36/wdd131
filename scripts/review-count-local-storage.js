//Local storage
const reviewCountOutput = document.getElementById("review-count");
let reviewCount = Number(window.localStorage.getItem("reviewCount-ls")) || 0;
reviewCount++;
reviewCountOutput.textContent = `${reviewCount}`;
localStorage.setItem("reviewCount-ls", reviewCount)

//Footer
const current_year = document.querySelector("#currentyear");
const today = new Date()

current_year.innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;