auth.onAuthStateChanged(user=>{
if(!user) return;

const efetivo = document.getElementById('efetivo');

 db.collection("users").onSnapshot(snapshot=>{
 efetivo.innerHTML = `<h3>Total efetivo: ${snapshot.size}</h3>`;
 });
});
