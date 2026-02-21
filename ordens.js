function enviarOrdem(){
const texto=document.getElementById('novaOrdem').value;
if(!texto) return;

 db.collection("ordens").add({
 texto:texto,
 data:new Date()
 });
}

function carregarOrdens(){
const lista=document.getElementById('listaOrdens');

 db.collection("ordens")
 .orderBy("data","desc")
 .onSnapshot(snapshot=>{
 lista.innerHTML="";
 snapshot.forEach(doc=>{
 const o=doc.data();
 lista.innerHTML+=`<div class='card'>${o.texto}</div>`;
 });
 });
}

carregarOrdens();
