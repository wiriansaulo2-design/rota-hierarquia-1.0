function carregarUsuarios(){
const div=document.getElementById('usuarios');

 db.collection("users").onSnapshot(snapshot=>{
 div.innerHTML="";

 snapshot.forEach(doc=>{
 const u=doc.data();

 div.innerHTML+=`
 <div class='card'>
 ${u.nome} - ${u.patente}
 <button onclick="promover('${doc.id}')">Promover</button>
 </div>
 `;
 });
 });
}

function promover(id){
const nova=prompt("Nova patente:");
if(!nova) return;
 db.collection("users").doc(id).update({patente:nova});
}

carregarUsuarios();
