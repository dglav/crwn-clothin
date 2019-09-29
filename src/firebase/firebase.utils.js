import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBS408LY7yMhGweN3HHK6zJ0nFkWt2aa_k",
  authDomain: "crwn-db-ce048.firebaseapp.com",
  databaseURL: "https://crwn-db-ce048.firebaseio.com",
  projectId: "crwn-db-ce048",
  storageBucket: "",
  messagingSenderId: "892267975047",
  appId: "1:892267975047:web:70d2a31f0f6006835c8322",
  measurementId: "G-1PBCYDT8E8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
