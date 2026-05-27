const current_year = document.querySelector("#currentyear");
const today = new Date();

const ham_Button = document.getElementById("menu");
const navigation = document.getElementById("navigation");

//array of temples
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 53997,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-17020.jpg"

    },
    {
        templeName: "Salt Lake",
        location: "Utah, USA",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-4937.jpg"

    },
    {
        templeName: "Vancouver British Columbia",
        location: "British Columbia, Canada",
        dedicated: "2010, May, 2",
        area: 28165,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/vancouver-british-columbia-temple/vancouver-british-columbia-temple-13064-main.jpg"

    }
];

//Call templeCards function
function createTempleCards(filteredTemples) {
    const grid = document.getElementById("temples");
    grid.innerHTML = "";
    filteredTemples.forEach(temple => {
        const fragment = document.createDocumentFragment();
        const templeCard = document.createElement("section");
        const info = document.createElement("div");
        const nameOutput = document.createElement("p");
        const locationOutput = document.createElement("p");
        const dedicatedOutput = document.createElement("p");
        const areaOutput = document.createElement("p");
        const img = document.createElement("img");

        nameOutput.innerHTML = `<div class="card-title">${temple.templeName}</div>`;
        locationOutput.innerHTML = `<span class="topic">Location: </span>${temple.location}`;
        dedicatedOutput.innerHTML = `<span class="topic">Dedicated: </span>${temple.dedicated}`;
        areaOutput.innerHTML = `<span class="topic">Size: </span>${temple.area} sq ft`;

        templeCard.setAttribute("class", "templeCard");

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} temple`);
        img.setAttribute("loading", "lazy");

        info.appendChild(nameOutput);
        info.appendChild(locationOutput);
        info.appendChild(dedicatedOutput);
        info.appendChild(areaOutput);

        fragment.appendChild(info);
        fragment.appendChild(img);

        templeCard.appendChild(fragment);
        grid.appendChild(templeCard);
    });
}

createTempleCards(temples);

//makes new array based on conditions
const homeLink = document.getElementById("base");
const oldLink = document.getElementById("old");
const newLink = document.getElementById("new");
const largeLink = document.getElementById("large");
const smallLink = document.getElementById("small");

//home (all temples)
homeLink.addEventListener("click", () => {
    createTempleCards(temples);
});

//old temples
oldLink.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => parseFloat((temple.dedicated.split())[0]) < 1900);
    createTempleCards(oldTemples);
});

//new temples
newLink.addEventListener("click", () => {
    const newTemples = temples.filter(temple => parseFloat((temple.dedicated.split())[0]) > 2000);
    createTempleCards(newTemples);
});

//large temples
largeLink.addEventListener("click", () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCards(largeTemples);
});

//small temples
smallLink.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCards(smallTemples);
});

//for hamburger button function
ham_Button.addEventListener("click", function () {
    navigation.classList.toggle("open");
    ham_Button.classList.toggle("open");
});


//For footer modified time
current_year.innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;


