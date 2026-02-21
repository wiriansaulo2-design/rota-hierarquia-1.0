/* MENU ATIVO */
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-link");
window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach(section=>{
        const sectionTop=section.offsetTop;
        if(scrollY>=sectionTop-200){current=section.getAttribute("id");}
    });
    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href").includes(current)){link.classList.add("active");}
    });
});

/* MENU MOBILE */
const toggle=document.getElementById("menu-toggle");
const menu=document.getElementById("menu");
toggle.addEventListener("click",()=>{menu.classList.toggle("show");});

/* SEÇÕES ANIMADAS */
const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add("show");}
    });
},{ threshold:0.2 });
document.querySelectorAll(".secao").forEach(secao=>{observer.observe(secao);});

/* ESTATÍSTICAS CIRCULARES */
const stats=document.querySelectorAll(".circular-chart");
stats.forEach(chart=>{
    const ctx=document.createElement("canvas");
    chart.replaceWith(ctx);
    const percentage=chart.dataset.percentage;
    const context=ctx.getContext("2d");
    ctx.width=120; ctx.height=120;
    let current=0;
    function draw(){
        context.clearRect(0,0,ctx.width,ctx.height);
        // fundo cinza
        context.beginPath();
        context.arc(60,60,50,0,Math.PI*2);
        context.strokeStyle="#222";
        context.lineWidth=10;
        context.stroke();
        // progresso vermelho
        context.beginPath();
        context.arc(60,60,50,-Math.PI/2,(Math.PI*2*current/100)-Math.PI/2);
        context.strokeStyle="#8b0000";
        context.lineWidth=10;
        context.stroke();
        // número
        context.font="16px Arial";
        context.fillStyle="#c0c0c0";
        context.textAlign="center";
        context.textBaseline="middle";
        context.fillText(Math.round(current)+"%",60,60);
        if(current<percentage){current+=1; requestAnimationFrame(draw);}
    }
    draw();
});

/* GALERIA MODAL */
const modal=document.getElementById("modal");
const modalImg=document.getElementById("modal-img");
const modalClose=document.getElementById("modal-close");
document.querySelectorAll(".gallery img").forEach(img=>{
    img.addEventListener("click",()=>{
        modal.style.display="block";
        modalImg.src=img.src;
    });
});
modalClose.addEventListener("click",()=>{modal.style.display="none";});
modal.addEventListener("click",e=>{if(e.target==modal) modal.style.display="none";});

/* HERO ANIMADO */
const canvas=document.getElementById("heroCanvas");
const ctx=canvas.getContext("2d");
let width=canvas.width=window.innerWidth;
let height=canvas.height=window.innerHeight;
window.addEventListener("resize",()=>{width=canvas.width=window.innerWidth;height=canvas.height=window.innerHeight;});

let stars=[];
for(let i=0;i<200;i++){stars.push({x:Math.random()*width,y:Math.random()*height,size:Math.random()*2,speed:0.1+Math.random()*0.3});}

let carX=-200;

function animateHero(){
    ctx.clearRect(0,0,width,height);
    // estrelas semi-transparentes
    ctx.globalAlpha=0.7;
    stars.forEach(s=>{
        s.y+=s.speed;
        if(s.y>height)s.y=0;
        ctx.fillStyle="#fff";
        ctx.fillRect(s.x,s.y,s.size,s.size);
    });
    // luz do carro
    const gradient=ctx.createLinearGradient(carX,100,carX+200,150);
    gradient.addColorStop(0,"rgba(255,0,0,0.4)");
    gradient.addColorStop(1,"rgba(0,0,255,0.4)");
    ctx.fillStyle=gradient;
    ctx.fillRect(carX,50,200,10);

    carX+=5;
    if(carX>width) carX=-200;

    requestAnimationFrame(animateHero);
}
animateHero();
