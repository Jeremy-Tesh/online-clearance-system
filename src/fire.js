import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
var fire = firebase.initializeApp({
  apiKey: "AIzaSyBTijdVD5B2SGI3KpC6J3dARWnFqGXQo_0",
  authDomain: "login-f63a0.firebaseapp.com",
  projectId: "login-f63a0",
  storageBucket: "login-f63a0.appspot.com",
  messagingSenderId: "27404585589",
  appId: "1:27404585589:web:c9a2ba2e74857cd4a7063c",
});

export var db = fire.firestore();

export const auth = fire.auth();

export default fire.database().ref();
