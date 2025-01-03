/** @format */
// import firebase from "./Firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJLI3ila2-Z4spgNtxdtEkJ_kG5gMv5tM",
  authDomain: "eshop-823ec.firebaseapp.com",
  projectId: "eshop-823ec",
  storageBucket: "eshop-823ec.firebasestorage.app",
  messagingSenderId: "908263570066",
  appId: "1:908263570066:web:25429b5121d12a4a74c44b",
  measurementId: "G-RNHEQM6YEN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
