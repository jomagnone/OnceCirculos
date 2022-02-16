import { query, orderBy, where, collection, getDocs,doc, getDoc,setDoc,updateDoc,increment } from '@firebase/firestore';
import db from './FirebaseConfig';

export const firestoreFetch = async (idCategory) => {
    let q;
    if (idCategory == 0) {
        q = query(collection(db, "products"), orderBy('title'));
    } else if (idCategory) {
        q = query(collection(db, "products"), where('idCategory', '==', idCategory));
    } else {
        q = query(collection(db, "products"), orderBy('title'));
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