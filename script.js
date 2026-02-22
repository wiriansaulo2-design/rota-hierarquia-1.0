function mudarAba(id, botao) {
  document.querySelectorAll('.aba').forEach(sec => {
    sec.classList.remove('ativa');
  });

  document.querySelectorAll('nav button').forEach(btn => {
    btn.classList.remove('active');
  });

  document.getElementById(id).classList.add('ativa');
  botao.classList.add('active');
}

window.onload = function() {
  setTimeout(function(){
    document.getElementById("loading").style.display = "none";
  }, 2000);
};
