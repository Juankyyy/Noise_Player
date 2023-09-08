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
}

function reproducirFuego() {
    const audio = new Audio("./Noises/Fire.mp3");
    audio.play();
}

function reproducirViento() {
    const audio = new Audio("./Noises/Wind.mp3");
    audio.play();
}

function reproducirBosque() {
    const audio = new Audio("./Noises/Forest.mp3");
    audio.play();
}