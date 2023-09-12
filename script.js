// Se obtienen la info de los botones
const rain = document.getElementById("rain");
const fire = document.getElementById("fire");
const wind = document.getElementById("wind");
const forest = document.getElementById("forest");

// Se inicializan las iteraciones de cada botón
let numRain = 1
let numFire = 1
let numWind = 1
let numForest = 1

// Se inicializan los audios de cada ruido
const rainAudio = new Audio("./Noises/Rain.mp3");
const fireAudio = new Audio("./Noises/Fire.mp3");
const windAudio = new Audio("./Noises/Wind.mp3");
const forestAudio = new Audio("./Noises/Forest.mp3");

// Se configura cada audio como loop
rainAudio.loop = true
fireAudio.loop = true
windAudio.loop = true
forestAudio.loop = true

// Escucha si dan click y dependiendo del boton ejecutan su función correspondiente
rain.addEventListener("click", rainPlayer);
fire.addEventListener("click", firePlayer);
wind.addEventListener("click", windPlayer);
forest.addEventListener("click", forestPlayer);

// Funciones de para cada ruido
function rainPlayer() {
    numRain++;
    
    // if para saber si el número es par o impar, dependiendo reproduce o pausa el audio
    // y usa la función toggleHover que le envía el nombre del ruido y su estado
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
    numForest++;

    if (numForest % 2 == 0) {
        toggleHover("forest", true);
        forestAudio.play();
    } else {
        forestAudio.pause();
        toggleHover("forest", false);
    }
}

// Función que agrega o remueve la clase con la cual se ve el botón activado
function toggleHover(name, stateHover) {
    const btn = document.getElementById(`${name}`);

    if (stateHover == true) {
        btn.classList.add("svgToggle");
    } else {
        btn.classList.remove("svgToggle");
    }
}