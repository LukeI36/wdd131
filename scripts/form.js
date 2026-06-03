//Select Product section 
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function options() {
    const productList = document.getElementById("product-name");
    products.forEach(product => {
        const fragment = document.createDocumentFragment();
        const productOutput = document.createElement("option");
        productOutput.setAttribute("value", `${product.id}`);
        productOutput.textContent = `${product.name}`;
        fragment.appendChild(productOutput);
        productList.appendChild(fragment);
    })
}

options();

//Footer
const current_year = document.querySelector("#currentyear");
const today = new Date()

current_year.innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;