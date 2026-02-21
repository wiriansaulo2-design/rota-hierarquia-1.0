/* ================= MENU ATIVO ================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

/* ================= MENU MOBILE ================= */
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});

/* ================= ANIMAÇÃO DAS SEÇÕES ================= */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".secao").forEach(secao => {
    observer.observe(secao);
});

/* ================= ANIMAÇÃO ESTATÍSTICAS ================= */
const stats = document.querySelectorAll(".stat-number");

stats.forEach(stat => {
    const target = +stat.dataset.number;
    let count = 0;
    const step = Math.ceil(target / 200);

    const updateNumber = () => {
        count += step;
        if (count > target) count = target;
        stat.innerText = count;
        if (count < target) {
            requestAnimationFrame(updateNumber);
        }
    };
    updateNumber();
});
