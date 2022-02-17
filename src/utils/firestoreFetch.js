import { query, orderBy, where, collection, getDocs,doc, getDoc,setDoc,updateDoc,increment } from '@firebase/firestore';
import db from './FirebaseConfig';

export const firestoreFetch = async (idCategory) => {
    let q = query(collection(db, "products"), orderBy('title'));
    if (idCategory !== '0' &&  idCategory) {
      q = query(collection(db, "products"), where('idCategory', '==', idCategory));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}



export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "products", idItem);
    const docSnap = await getDoc(docRef);
    let data
    if (docSnap.exists()) {

      data = {
        id: docSnap.id,
        ...docSnap.data()
         }
    } else {
      console.log("No such document!");
    }

    return data;
}

export const firestoreFetchCategory= async (owner) => {

  let q = query(collection(db, "category"), where('owner', '==', owner));

  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map(document => ({
      id: document.id,
      ...document.data()
  }));
  return dataFromFirestore;

}

export const firestoreInsertOrder = async (data) => {
     
    const newOrderRef = doc(collection(db, "orders"));
    await setDoc(newOrderRef, data);
    return newOrderRef;
  }


export const firestoreUpdateStock = async (item) => {
    const itemRef = doc(db, "products", item.id);
    await updateDoc(itemRef, {
      stock: increment(-item.qty)
        })
}