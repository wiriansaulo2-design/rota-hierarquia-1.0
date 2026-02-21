// Seleciona canvas
const canvas = document.getElementById("heroCanvas");
const ctx = canvas.getContext("2d");

// Ajusta tamanho
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

// Cria estrelas
let stars = [];
for (let i = 0; i < 200; i++) {
    stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2,
        speed: 0.1 + Math.random() * 0.3
    });
}

// Luz do carro
let carX = -200;

// Função de animação
function animateHero() {
    ctx.clearRect(0, 0, width, height);

    // Desenha estrelas
    ctx.globalAlpha = 0.7; // semi-transparentes
    stars.forEach(s => {
        s.y += s.speed;
        if (s.y > height) s.y = 0;
        ctx.fillStyle = "#fff";
        ctx.fillRect(s.x, s.y, s.size, s.size);
    });

    // Desenha luz do carro
    const gradient = ctx.createLinearGradient(carX, 100, carX + 200, 150);
    gradient.addColorStop(0, "rgba(255,0,0,0.4)");
    gradient.addColorStop(1, "rgba(0,0,255,0.4)");
    ctx.fillStyle = gradient;
    ctx.fillRect(carX, 50, 200, 10);

    carX += 5;
    if (carX > width) carX = -200;

    requestAnimationFrame(animateHero);
}

animateHero();
