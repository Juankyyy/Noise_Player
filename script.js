const lluvia = document.getElementById("Rain");
const fuego = document.getElementById("Fire");
const viento = document.getElementById("Wind");
const bosque = document.getElementById("Forest");

lluvia.addEventListener("click", reproducirLluvia);
fuego.addEventListener("click", reproducirFuego);
viento.addEventListener("click", reproducirViento);
bosque.addEventListener("click", reproducirBosque);

function reproducirLluvia() {
    const audio = new Audio("./noises/Rain.mp3");
    audio.play();
}

function reproducirFuego() {
    const audio = new Audio("./noises/Fire.mp3");
    audio.play();
}

function reproducirViento() {
    const audio = new Audio("./noises/Wind.mp3");
    audio.play();
}

function reproducirBosque() {
    const audio = new Audio("./noises/Forest.mp3");
    audio.play();
}