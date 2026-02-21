function abrirAba(id) {
document.querySelectorAll(".aba").forEach(aba => {
aba.classList.remove("ativa")
})

document.getElementById(id).classList.add("ativa")
}


/* EXEMPLO DE COMO ADICIONAR MEMBROS (APAGUE OU EDITE) */

const dados = {
recrutas: [],
soldados: [],
cabos: [],
sargentos: [],
tenentes: [],
capitaes: [],
coroneis: [],
geral: []
}

function renderizar() {

for (let patente in dados) {

const lista = document.getElementById("lista" + capitalize(patente))

if (!lista) continue

lista.innerHTML = ""

dados[patente].forEach(nome => {
const li = document.createElement("li")
li.textContent = nome
lista.appendChild(li)
})
}

}

function capitalize(texto) {
return texto.charAt(0).toUpperCase() + texto.slice(1)
}

renderizar()
