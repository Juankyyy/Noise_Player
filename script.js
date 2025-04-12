// Se obtienen la info de los botones
const rain = document.getElementById("rain");
const fire = document.getElementById("fire");
const wind = document.getElementById("wind");
const forest = document.getElementById("forest");

const forestVolume = document.getElementById("forestVolume");

// Se inicializan las iteraciones de cada botón
let numRain = 1
let numFire = 1
let numWind = 1
let numForest = 1

// Se inicializan los audios de cada ruido
const rainAudio = new Audio("./sounds/rain.mp3");
const fireAudio = new Audio("./sounds/fire.mp3");
const windAudio = new Audio("./sounds/wind.mp3");
const forestAudio = new Audio("./sounds/forest.mp3");

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

rainVolume.addEventListener("input", setVolumeRain);
fireVolume.addEventListener("input", setVolumeFire);
windVolume.addEventListener("input", setVolumeWind);
forestVolume.addEventListener("input", setVolumeForest);

// audioContext
const audioContext = new AudioContext();

// Rain

// Nodo de ganacia (amplificador)
const gainNodeRain = audioContext.createGain();

// conectar el audio a la ganacia
const trackRain = audioContext.createMediaElementSource(rainAudio);
trackRain.connect(gainNodeRain).connect(audioContext.destination);

// Fire
const gainNodeFire = audioContext.createGain();
const trackFire = audioContext.createMediaElementSource(fireAudio);
trackFire.connect(gainNodeFire).connect(audioContext.destination);

// Wind
const gainNodeWind = audioContext.createGain();
const trackWind = audioContext.createMediaElementSource(windAudio); 
trackWind.connect(gainNodeWind).connect(audioContext.destination);

// Forest
const gainNodeForest = audioContext.createGain();
const trackForest = audioContext.createMediaElementSource(forestAudio);
trackForest.connect(gainNodeForest).connect(audioContext.destination);

function setVolumeWind () {
    gainNodeWind.gain.value = windVolume.value;
}

function setVolumeFire () {
    gainNodeFire.gain.value = fireVolume.value;
}

function setVolumeRain () {
    gainNodeRain.gain.value = rainVolume.value;
}

function setVolumeForest () {
    gainNodeForest.gain.value = forestVolume.value;
}

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