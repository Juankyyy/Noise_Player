const rain = document.getElementById("rain");
const fire = document.getElementById("fire");
const wind = document.getElementById("wind");
const forest = document.getElementById("forest");

let numRain = 1
let numFire = 1
let numWind = 1
let numForest = 1

const rainAudio = new Audio("./Noises/rain.mp3");
const fireAudio = new Audio("./Noises/fire.mp3");
const windAudio = new Audio("./Noises/wind.mp3");
const forestAudio = new Audio("./Noises/forest.mp3");

rainAudio.loop = true
fireAudio.loop = true
windAudio.loop = true
forestAudio.loop = true

rain.addEventListener("click", rainPlayer);
fire.addEventListener("click", firePlayer);
wind.addEventListener("click", windPlayer);
forest.addEventListener("click", forestPlayer);

function rainPlayer() {
    numRain++;
    
    if (numRain % 2 == 0) {
        rainAudio.play();
        toggleHover("rain", true);
    } else {
        rainAudio.pause();
        toggleHover("rain", false);
    }
}

function firePlayer() {
    numFire++;

    if (numFire % 2 == 0) {
        toggleHover("fire", true);
        fireAudio.play();
    } else {
        fireAudio.pause();
        toggleHover("fire", false);
    }
}

function windPlayer() {
    numWind++;

    if (numWind % 2 == 0) {
        toggleHover("wind", true);
        windAudio.play();
    } else {
        windAudio.pause();
        toggleHover("wind", false);
    }
}

function forestPlayer() {
    forestAudio.loop = true
    numForest++;

    if (numForest % 2 == 0) {
        toggleHover("forest", true);
        forestAudio.play();
    } else {
        forestAudio.pause();
        toggleHover("forest", false);
    }
}

function toggleHover(name, stateHover) {
    const btn = document.getElementById(`${name}`);

    if (stateHover == true) {
        btn.classList.add("svgToggle");
    } else {
        btn.classList.remove("svgToggle");
    }
}