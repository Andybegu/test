import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDL-aWOPJgBJ84Pzs5JbKhkWHRWXOXqVTU",
  authDomain: "addisssoft.firebaseapp.com",
  databaseURL: "https://addisssoft-default-rtdb.firebaseio.com",
  projectId: "addisssoft",
  storageBucket: "addisssoft.appspot.com",
  messagingSenderId: "331729625998",
  appId: "1:331729625998:web:24ac65cf9eb0e159077adf"
};
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
