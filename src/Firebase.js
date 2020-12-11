import firebase from "firebase";



const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBGeme1oHz9fAS_3x39tU-cd7GySv32S4I",
    authDomain: "proiecttw-c12c1.firebaseapp.com",
    projectId: "proiecttw-c12c1",
    storageBucket: "proiecttw-c12c1.appspot.com",
    messagingSenderId: "13921047644",
    appId: "1:13921047644:web:7607dd82394b1925ba4299",
    measurementId: "G-N3ZQZL01LE",
    databaseURL: "https://proiecttw-c12c1-default-rtdb.firebaseio.com"
});
const db = firebaseApp.firestore();

export default db;