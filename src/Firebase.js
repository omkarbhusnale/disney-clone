import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDuU63tJmz2A6g0yEW_zwCpdLhDe34LAYA",

  authDomain: "disneyplus-clone-3eaf1.firebaseapp.com",

  projectId: "disneyplus-clone-3eaf1",

  storageBucket: "disneyplus-clone-3eaf1.appspot.com",

  messagingSenderId: "334641010235",

  appId: "1:334641010235:web:01ed9468608fe0f51fae1e",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
