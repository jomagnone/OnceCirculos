// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8krPZbDfIkvSQqvjFBnxi_-TNgyKYUnk",
  authDomain: "circuloonce.firebaseapp.com",
  projectId: "circuloonce",
  storageBucket: "circuloonce.appspot.com",
  messagingSenderId: "401758020513",
  appId: "1:401758020513:web:8bf461162857ab40e161e0",
  measurementId: "G-QGMCB17DF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export default db;
