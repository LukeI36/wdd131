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
        img_name: "optimus-prime",
        title1: "Before being Prime",
        fact1: "Optimus Prime hasn't always been \"Optimus Prime\". He used to be known as Orion Pax, and in more recent years, has been depicted as a clerk or an energon miner.",
        title2: "Chosen",
        fact2: "The ancient prime artifact called the \"Matrix of Leadership\", chose Orion Pax to be it's bearer, which transformed Orion Pax to Optimus Prime.",
        title3: "Double Edge Sword",
        fact3: "One of the key characteristics that Optimus Prime has is his compassion to all sentient beings. While the Decepticons have used Optimus' sense of compassion against him, it is also the source of his strength."
    },
    {
        name: "Megatron",
        alliance: "Decepticon",
        role: "Leader of the Decepticons",
        alt_mode: "Gun",
        weapons: "Fusion cannon, Energon flail",
        quote: "\"Peace through tyranny!\"",
        img_name: "megatron",
        title1: "We were Brothers Once",
        fact1: "Megatron was once friends with the Autobot leader, Optimus Prime, when he was originally Orion Pax. They both had the same view of Cybertron's corrupted hierarchy and wanted to change it. While Orion wanted to change the hierarchy peacefully, Megatron wanted to change it by force.",
        title2: "Grand Purpose",
        fact2: "As Megatron began to lead the Decepticons and fight many battles, he began to believe in a grand purpose for his race, that they were destined to be an empire across the universe and that he would be the head of it.",
        title3: "Reformed",
        fact3: "Retreating to space after a battle on Earth, Megatron became severely injured, to the point where the Decepticons decided to abandon him and leave him drifting through space. He was later found by the planet-eater, Unicron, where he was reformed into Galvatron. As a result, Megatron became a mere servant and lost his free will."
    },
    {
        name: "Bumblebee",
        alliance: "Autobot",
        role: "Scout",
        alt_mode: "Volkswagen Beetle",
        weapons: "Blasters, Plasma Cannon",
        quote: "\"Sting like a bee.\"",
        img_name: "bumblebee",
        title1: "Icon",
        fact1: "While Bumblebee is inspired and looks up to his leader, Optimus Prime, most Autobots respect and look up to him, due to his brave heart and friendly demeanor.",
        title2: "Short Advantage",
        fact2: "Due to his short size, bumblebee is able to complete certain missions that most Autobots could not.",
        title3: "Voice Loss",
        fact3: "In some adaptations of Transformers media, Bumblebee is unable to speak, often times because a Decepticon ripped out his voicebox. In order to communicate with his commrades, he uses a radio to mumble up words from channels to make full sentences."
    },
    {
        name: "Starscream",
        alliance: "Decepticon",
        role: "Sky Commander",
        alt_mode: "Fighter Jet",
        weapons: "Null Rays",
        quote: "\"Conquest is made of the ashes of one's enemies.\"",
        img_name: "starscream",
        title1: "Worthy Leader",
        fact1: "Starscream often clashes with the Decepticon leader, Megatron, believeing that he would be a better leader. Starscream will take any chance he can take to make Megatron fall so that he could take over and be the leader of the Decepticons.",
        title2: "Seekers",
        fact2: "Starscream leads his own team in the ranks for the Decepticons known as the \"Seekers\"",
        title3: "Invincible",
        fact3: "Unlike most cybertronians, Starscream's spark (a cybertronian's soul) was different. Being a mutated spark, Starscream's spark could not be destroyed, meaning for the rest of space and time, Starscream soul will still live somewhere in the universe."
    }
];

function characterCards(charArray) {
    information.innerHTML = "";

    charArray.forEach(character => {
        const fragment = document.createDocumentFragment();
        const nameOutput = document.createElement("h2");
        const cardImg = document.createElement("img");
        const cardContainer = document.createElement("div");

        cardContainer.classList.add("character-card");

        nameOutput.classList.add("character-title");
        nameOutput.textContent = `${character.name}`

        cardImg.setAttribute("src", `images/characters/${character.img_name}/${character.img_name}-card.webp`);
        cardImg.setAttribute("alt", `${character.name} card display`);
        cardImg.setAttribute("loading", "lazy");
        cardImg.classList.add("card-image");

        fragment.appendChild(cardImg);
        fragment.appendChild(nameOutput);

        cardContainer.appendChild(fragment);

        characterCardOutput.appendChild(cardContainer);
    });
};

characterCards(characters);