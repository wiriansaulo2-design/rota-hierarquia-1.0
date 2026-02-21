// 🔥 CONFIG FIREBASE
const firebaseConfig = {
  apiKey: "COLE_AQUI",
  authDomain: "COLE_AQUI",
  projectId: "COLE_AQUI",
  storageBucket: "COLE_AQUI",
  messagingSenderId: "COLE_AQUI",
  appId: "COLE_AQUI"
};

// INICIAR FIREBASE
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// SALVAR DADO
function salvar() {
  const texto = document.getElementById("mensagem").value;

  db.collection("mensagens").add({
    texto: texto
  });

  document.getElementById("mensagem").value = "";
}

// MOSTRAR DADOS EM TEMPO REAL
db.collection("mensagens").onSnapshot(snapshot => {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  snapshot.forEach(doc => {
    const li = document.createElement("li");
    li.textContent = doc.data().texto;
    lista.appendChild(li);
  });
});
