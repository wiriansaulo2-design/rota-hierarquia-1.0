/* ===============================
   CONFIG API
================================ */
const API_URL = "https://SEU-BACKEND.onrender.com";

/* ===============================
   LOGIN
================================ */
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Erro no login");
        return;
      }

      localStorage.setItem("token", data.token);
      window.location.href = "dashboard.html";

    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao conectar com servidor");
    }
  });
}

/* ===============================
   PROTEGER DASHBOARD
================================ */
function checkAuth() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "login.html";
  }
}

if (window.location.pathname.includes("dashboard.html")) {
  checkAuth();
}

/* ===============================
   LOGOUT
================================ */
const logoutBtn = document.getElementById("logout");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href = "login.html";
  });
}

/* ===============================
   BUSCAR ESTATÍSTICAS
================================ */
async function loadStats() {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${API_URL}/stats`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      alert("Erro ao carregar dados");
      return;
    }

    animateCounter("ocorrencias", data.ocorrencias);
    animateCounter("prisoes", data.prisoes);
    animateCounter("apreensoes", data.apreensoes);
    animateCounter("municoes", data.municoes);

    createChart(data);

  } catch (error) {
    console.error(error);
  }
}

if (document.getElementById("dashboard")) {
  loadStats();
}

/* ===============================
   CONTADOR ANIMADO PREMIUM
================================ */
function animateCounter(id, target) {
  const element = document.getElementById(id);
  if (!element) return;

  let count = 0;
  const speed = target / 200;

  const update = () => {
    count += speed;
    if (count < target) {
      element.innerText = Math.floor(count);
      requestAnimationFrame(update);
    } else {
      element.innerText = target;
    }
  };

  update();
}

/* ===============================
   GRÁFICO REAL - CHART.JS
================================ */
function createChart(data) {
  const ctx = document.getElementById("statsChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Ocorrências", "Prisões", "Apreensões", "Munições"],
      datasets: [{
        label: "Operações ROTA",
        data: [
          data.ocorrencias,
          data.prisoes,
          data.apreensoes,
          data.municoes
        ],
        backgroundColor: [
          "#d4af37",
          "#b8860b",
          "#ffd700",
          "#c5a000"
        ],
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "#ffffff"
          }
        }
      },
      scales: {
        x: {
          ticks: { color: "#ffffff" },
          grid: { color: "#333" }
        },
        y: {
          ticks: { color: "#ffffff" },
          grid: { color: "#333" }
        }
      }
    }
  });
}

/* ===============================
   SLIDER PREMIUM AUTOMÁTICO
================================ */
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function autoSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

if (slides.length > 0) {
  setInterval(autoSlide, 5000);
}

/* ===============================
   ANIMAÇÃO DE ENTRADA SUAVE
================================ */
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".card");

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add("visible");
    }
  });
});
