
// firestore.js - Funções genéricas CRUD para Firebase Firestore

// 1) Adicionar um documento
function addData(coll, data) {
  return db.collection(coll).add(data);
}

// 2) Ouvir dados em tempo real
function listenData(coll, callback) {
  return db.collection(coll)
    .onSnapshot(snap => {
      const arr = [];
      snap.forEach(doc => arr.push({ id: doc.id, ...doc.data() }));
      callback(arr);
    });
}

// 3) Editar documento
function updateData(coll, id, data) {
  return db.collection(coll).doc(id).update(data);
}

// 4) Excluir documento
function deleteData(coll, id) {
  return db.collection(coll).doc(id).delete();
}
