function mudarAba(id, botao) {
  const abas = document.querySelectorAll('.aba');
  const botoes = document.querySelectorAll('nav button');

  abas.forEach(aba => {
    aba.classList.remove('ativa');
  });

  botoes.forEach(btn => {
    btn.classList.remove('active');
  });

  document.getElementById(id).classList.add('ativa');
  botao.classList.add('active');
}

// Loading seguro
window.addEventListener("load", function () {
  const loading = document.getElementById("loading");
  setTimeout(() => {
    loading.style.display = "none";
  }, 2000);
});
