import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyB9J51ToLOdPxPcUhWMhBv_TOtLuS7HDKk",
  authDomain: "react-crud-3581b.firebaseapp.com",
  databaseURL: "https://react-crud-3581b-default-rtdb.firebaseio.com",
  projectId: "react-crud-3581b",
  storageBucket: "react-crud-3581b.appspot.com",
  messagingSenderId: "17632181463",
  appId: "1:17632181463:web:2b23bdc8a80a36ef828492",
};
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
