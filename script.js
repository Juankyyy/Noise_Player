const lluvia = document.getElementById("Rain");
const fuego = document.getElementById("Fire");
const viento = document.getElementById("Wind");
const bosque = document.getElementById("Forest");

lluvia.addEventListener("click", reproducirLluvia);
fuego.addEventListener("click", reproducirFuego);
viento.addEventListener("click", reproducirViento);
bosque.addEventListener("click", reproducirBosque);

function reproducirLluvia() {
    const audio = new Audio("./Noises/Rain.mp3");
    audio.play();
    console.log("Audio Lluvia empezó a reproducirse");
}

function reproducirFuego() {
    const audio = new Audio("./Noises/Fire.mp3");
    audio.play();
    console.log("Audio Fuego empezó a reproducirse");
}

function reproducirViento() {
    const audio = new Audio("./Noises/Wind.mp3");
    audio.play();
    console.log("Audio Viento empezó a reproducirse");
}

function reproducirBosque() {
    const audio = new Audio("./Noises/Forest.mp3");
    audio.play();
    console.log("Audio Bosque empezó a reproducirse");
}