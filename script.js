// Menu responsivo
document.getElementById("menu-toggle").addEventListener("click",()=>{
    document.getElementById("menu").classList.toggle("active");
});

// Hero canvas simples (estrelas)
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
for(let i=0;i<100;i++){
    stars.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.5});
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="#fff";
    stars.forEach(s=>{
        ctx.beginPath();
        ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        ctx.fill();
    });
    requestAnimationFrame(draw);
}
draw();
