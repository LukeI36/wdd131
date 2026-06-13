// Menu
const top_menu = document.getElementById("top-menu")
const ham_Button = document.getElementById("menu")
const navigation = document.getElementById("navigation")

ham_Button.addEventListener("click", function () {
    top_menu.classList.toggle("open")
    navigation.classList.toggle("open");
    ham_Button.classList.toggle("open");
})

//Character Cards
const library = document.getElementById("library");
const characterCardOutput = document.getElementById("display");
const information = document.getElementById("info");

const characters = [
    {
        name: "Optimus Prime",
        alliance: "Autobot",
        role: "Leader of the Autobots",
        alt_mode: "Semi Truck",
        weapons: "Energon axe, Ion blaster",
        quote: "\"Freedom is the right of all sentient beings.\"",
        source_name: "optimus-prime",
        full_body_max_width: "300px",
        alternative_max_width: "600px",
        titles: ["Before being Prime", "Chosen", "Double Edge Sword"],
        facts: [
            "Optimus Prime hasn't always been \"Optimus Prime\". He used to be known as Orion Pax, and in more recent years, has been depicted as a clerk or an energon miner.",
            "The ancient prime artifact called the \"Matrix of Leadership\" chose Orion Pax to be its bearer, which transformed Orion Pax to Optimus Prime.",
            "One of the key characteristics that Optimus Prime has is his compassion to all sentient beings. While the Decepticons have used Optimus Prime's sense of compassion against him, it is also the source of his strength."]
    },
    {
        name: "Megatron",
        alliance: "Decepticon",
        role: "Leader of the Decepticons",
        alt_mode: "Gun",
        weapons: "Fusion cannon, Energon flail",
        quote: "\"Peace through tyranny!\"",
        source_name: "megatron",
        full_body_max_width: "280px",
        alternative_max_width: "600px",
        titles: ["We were Brothers Once", "Grand Purpose", "Reformed"],
        facts: [
            "Megatron was once friends with the Autobot leader, Optimus Prime, when he was originally Orion Pax. They both had the same view of Cybertron's corrupted hierarchy and wanted to change it. While Orion wanted to change the hierarchy peacefully, Megatron wanted to change it by force.",
            "As Megatron began to lead the Decepticons and fight many battles, he began to believe in a grand purpose for his race, that they were destined to be an empire across the universe and that he would be the head of it.",
            "Retreating to space after a battle on Earth, Megatron became severely injured, to the point where the Decepticons decided to abandon him and leave him drifting through space. He was later found by the planet-eater, Unicron, where he was reformed into Galvatron. However, as a result of being reformed, Megatron became a servant to Unicron and lost his free will."
        ]
    },
    {
        name: "Bumblebee",
        alliance: "Autobot",
        role: "Scout",
        alt_mode: "Volkswagen Beetle",
        weapons: "Blasters, Plasma Cannon",
        quote: "\"Sting like a bee.\"",
        source_name: "bumblebee",
        full_body_max_width: "210px",
        alternative_max_width: "400px",
        titles: ["Icon", "Short Advantage", "Voice Loss"],
        facts: [
            "While Bumblebee looks up to his leader, Optimus Prime, most of the Autobots look up to Bumblebee, due to his brave heart and friendly personality.",
            "Due to his short size, Bumblebee is able to complete certain missions that most Autobots could not.",
            "In some adaptations of Transformers media, Bumblebee is unable to speak, oftentimes because a Decepticon ripped out his voicebox. In order to communicate with his comrades, he uses a radio to mumble up words from channels to make full sentences."]
    },
    {
        name: "Starscream",
        alliance: "Decepticon",
        role: "Sky Commander",
        alt_mode: "Fighter Jet",
        weapons: "Null Rays",
        quote: "\"Conquest is made of the ashes of one's enemies.\"",
        source_name: "starscream",
        full_body_max_width: "275px",
        alternative_max_width: "600px",
        titles: ["Worthy Leader", "Seekers", "Immortal"],
        facts: [
            "Starscream often clashes with the Decepticon leader, Megatron, believing that he would be a better leader. Starscream will take any chance he can take to make Megatron fall so that he could take over and be the leader of the Decepticons.",
            "Starscream leads his own team in the ranks for the Decepticons known as the \"Seekers\". All the members of the Seekers transform into fighter jets and most of them have a similar look to Starscream. Two of the most well known members of the Seekers are Skywarp (purple) and Thundercracker (blue).",
            "Unlike most Cybertronians, Starscream's spark (a Cybertronian's soul) was different. Being a mutated spark, Starscream's spark could not be destroyed, making him immortal. For the rest of space and time, Starscream's soul will still live somewhere in the universe."]
    }
];

function characterCards(charArray) {
    information.style.display = "none";
    library.style.display = "inline";
    characterCardOutput.innerHTML = ""

    charArray.forEach(character => {
        const fragment = document.createDocumentFragment();
        const nameOutput = document.createElement("h2");
        const cardImg = document.createElement("img");
        const cardContainer = document.createElement("div");

        cardContainer.classList.add("character-card");

        cardImg.setAttribute("src", `images/characters/${character.source_name}/${character.source_name}-card.webp`);
        cardImg.setAttribute("alt", `${character.name} card display`);
        cardImg.setAttribute("loading", "lazy");
        cardImg.classList.add("card-image");

        nameOutput.classList.add("character-title");
        nameOutput.innerHTML = `<a class="link" href=# id="${character.source_name}">${character.name}</a>`;

        fragment.appendChild(cardImg);
        fragment.appendChild(nameOutput);

        cardContainer.appendChild(fragment);

        characterCardOutput.appendChild(cardContainer);

        const link = document.getElementById(`${character.source_name}`);

        link.addEventListener("click", () => {
            infopage(charArray, character);
        });
    });
};

//info pages
function infopage(currentArray, character) {
    library.style.display = "none";
    information.style.display = "inline";
    information.innerHTML = "";

    const fragment = document.createDocumentFragment();

    // Go back to Character Cards
    const goBack = document.createElement("p");
    goBack.setAttribute("id", "go-back")
    goBack.innerHTML = "<a href=#><- Go back</a>";
    goBack.addEventListener("click", () => {
        characterCards(currentArray);
    });
    fragment.appendChild(goBack);

    // Title and quote
    const botName = document.createElement("h1");
    botName.textContent = `${character.name}`
    botName.setAttribute("id", "bot-name");
    fragment.appendChild(botName);

    const botQuote = document.createElement("h2");
    botQuote.textContent = `${character.quote}`
    botQuote.setAttribute("id", "bot-quote");
    fragment.appendChild(botQuote);

    // Transformer and info
    const mainInfo = document.createElement("div");
    mainInfo.setAttribute("id", "main-info");

    const botDisplay = document.createElement("div");
    botDisplay.setAttribute("id", "bot-display");

    const mainImg = document.createElement("img");
    mainImg.setAttribute("id", "bot-image");
    mainImg.setAttribute("src", `images/characters/${character.source_name}/${character.source_name}-full-body.webp`);
    mainImg.setAttribute("alt", `${character.name}`);
    mainImg.setAttribute("loading", "lazy");
    mainImg.style.maxWidth = `${character.full_body_max_width}`;

    const transformButton = document.createElement("button");
    transformButton.textContent = "Transform";
    transformButton.setAttribute("id", "transform-button");
    transformButton.addEventListener("click", () => {
        if (mainImg.getAttribute("src") === `images/characters/${character.source_name}/${character.source_name}-full-body.webp`) {
            mainImg.setAttribute("src", `images/characters/${character.source_name}/${character.source_name}-alternative.webp`);
            mainImg.style.maxWidth = `${character.alternative_max_width}`;
        }
        else {
            mainImg.setAttribute("src", `images/characters/${character.source_name}/${character.source_name}-full-body.webp`);
            mainImg.style.maxWidth = `${character.full_body_max_width}`;
        }
    });

    botDisplay.appendChild(transformButton);
    botDisplay.appendChild(mainImg);
    mainInfo.appendChild(botDisplay);

    const details = document.createElement("div");
    details.setAttribute("id", "details");

    const botAlliance = document.createElement("p");
    botAlliance.textContent = `Alliance: ${character.alliance}`;
    details.appendChild(botAlliance);

    const botRole = document.createElement("p");
    botRole.textContent = `Role: ${character.role}`;
    details.appendChild(botRole);

    const botAlt = document.createElement("p");
    botAlt.textContent = `Transforms into: ${character.alt_mode}`;
    details.appendChild(botAlt);

    const botWeapons = document.createElement("p");
    botWeapons.textContent = `Weapons: ${character.weapons}`;
    details.appendChild(botWeapons);

    mainInfo.appendChild(details);
    fragment.appendChild(mainInfo);

    const factContainer = document.createElement("div");
    factContainer.setAttribute("id", "bot-facts");
    const botFactsTitle = document.createElement("h2");
    botFactsTitle.textContent = `Facts about ${character.name}:`
    botFactsTitle.setAttribute("class", "bot-facts-title");
    factContainer.appendChild(botFactsTitle);

    const forLoopLength = character.facts.length;
    for (let i = 0; i < forLoopLength; i++) {
        const factCard = document.createElement("div");
        factCard.setAttribute("class", "fact-container");

        const factTitle = document.createElement("h3");
        factTitle.textContent = `${character.titles[i]}`;
        factTitle.setAttribute("class", "fact-title");
        factCard.appendChild(factTitle);

        const factImg = document.createElement("img");
        factImg.setAttribute("class", "fact-image");
        factImg.setAttribute("src", `images/characters/${character.source_name}/${character.source_name}-fact-image-${i + 1}.webp`);
        factImg.setAttribute("alt", `${character.name} fact ${i + 1} display`);
        factImg.setAttribute("loading", "lazy");
        factCard.appendChild(factImg);

        const factInfo = document.createElement("p");
        factInfo.textContent = `${character.facts[i]}`;
        factInfo.setAttribute("class", "fact-info");
        factCard.appendChild(factInfo);

        factContainer.appendChild(factCard);
    }

    fragment.appendChild(factContainer);

    information.appendChild(fragment);
}

characterCards(characters);

//filters
const currentFilterTitle = document.getElementById("current-filter");
const noFilterLink = document.getElementById("no-filter");
const autobotLink = document.getElementById("autobots");
const decepticonLink = document.getElementById("decepticons");

noFilterLink.addEventListener("click", () => {
    currentFilterTitle.textContent = "No Filter";
    characterCards(characters);
});

autobotLink.addEventListener("click", () => {
    currentFilterTitle.textContent = "Autobots";
    const autobotArray = characters.filter(character => character.alliance === "Autobot");
    characterCards(autobotArray);
});

decepticonLink.addEventListener("click", () => {
    currentFilterTitle.textContent = "Decepticons";
    const decepticonArray = characters.filter(character => character.alliance === "Decepticon");
    characterCards(decepticonArray);
});

