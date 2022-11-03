let futbol = document.getElementById("futbol");
let basket = document.getElementById("basket");
let tenis = document.getElementById("tenis");
let futsal = document.getElementById("futsal");
let voley = document.getElementById("voley");
let gym = document.getElementById("gym");


futsal.addEventListener("click", () => {
    location.href = "futsal.html"
});

basket.addEventListener("click", () => {
    location.href = "basket.html"
});

voley.addEventListener("click", () => {
    location.href = "voleyball.html"
});

tenis.addEventListener("click", () => {
    location.href = "tenis.html"
});

futbol.addEventListener("click", () => {
    location.href = "football.html"
});

gym.addEventListener("click", () => {
    location.href = "gym.html"
})