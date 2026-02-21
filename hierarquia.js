const ordemPatentes=[
"Coronel",
"Major",
"Capitão",
"Sargento",
"Cabo",
"Soldado"
];

function carregarHierarquia(){
const div = document.getElementById('listaHierarquia');

 db.collection("users").onSnapshot(snapshot=>{
 div.innerHTML="";

 ordemPatentes.forEach(p=>{

 const grupo = document.createElement('div');
 grupo.className='card';
 grupo.innerHTML=`<h3>${p}</h3>`;

 snapshot.forEach(doc=>{
 const u=doc.data();
 if(u.patente===p){
 grupo.innerHTML += `<p>${u.nome}</p>`;
 }
 });

 div.appendChild(grupo);
 });
 });
}

carregarHierarquia();
