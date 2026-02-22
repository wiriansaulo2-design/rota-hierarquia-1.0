function mudarAba(id) {
  const abas = document.querySelectorAll('.aba');
  const botoes = document.querySelectorAll('nav button');

  abas.forEach(aba => aba.classList.remove('ativa'));
  botoes.forEach(btn => btn.classList.remove('active'));

  document.getElementById(id).classList.add('ativa');

  event.target.classList.add('active');
}

// Garantir que loading desapareça corretamente
window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 3000);
});
