const hero = document.querySelector(".hero");

const images = [
  "assets/rota_21_lucca.jpg",
  "assets/rota_54.jpg",
  "assets/ROTA_98.jpg"
];

let current = 0;

function changeBackground() {
  hero.style.backgroundImage = `url(${images[current]})`;
  current = (current + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 5000);
