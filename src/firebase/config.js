import firebase from "firebase/app";
import "firebase/storage";
import 'firebase/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyD0O1e-26XaUiQjFGkGZtwGCJmBpDZLpD0",
    authDomain: "firegram-162e5.firebaseapp.com",
    projectId: "firegram-162e5",
    storageBucket: "firegram-162e5.appspot.com",
    messagingSenderId: "19935558356",
    appId: "1:19935558356:web:4ca5655aad2c1cd7c09941",
    measurementId: "G-D7GL84GXFX"
  }; 

firebase.initializeApp(firebaseConfig);  

const projectStorage = firebase.storage(); 
const projectFirestore = firebase.firestore(); 
const timestamp = firebase.firestore.FieldValue.serverTimestamp; 

export { projectStorage, projectFirestore, timestamp }; 