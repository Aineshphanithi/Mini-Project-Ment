
import firebase from "firebase";
require("firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyAwXXhWwsj4az-zXLoEhNSD7Q-PQbPuA0E",
    authDomain: "blogpage-8efeb.firebaseapp.com",
    databaseURL: "https://blogpage-8efeb.firebaseio.com",
    projectId: "blogpage-8efeb",
    storageBucket: "blogpage-8efeb.appspot.com",
    messagingSenderId: "448174358162",
    appId: "1:448174358162:web:528e5edfd2c063028e704b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

<<<<<<< HEAD
  var db=firebase.firestore();
=======
  const db=firebase.firestore();
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15

  export const auth=firebase.auth()
  export const firestore=firebase.firestore
  export default db;