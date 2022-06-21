import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyBd3-3Uz9DNubBdM9kf82nFi9ZTM5LOHmk",
  authDomain: "addissoft-ada66.firebaseapp.com",
  databaseURL: "https://addissoft-ada66-default-rtdb.firebaseio.com",
  projectId: "addissoft-ada66",
  storageBucket: "addissoft-ada66.appspot.com",
  messagingSenderId: "217916823917",
  appId: "1:217916823917:web:d4cc57cff5f14dc13a6264"
};
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
