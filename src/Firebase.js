import firebase from "firebase";




const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBRx3i-w6UuXdgjgFy07iKdmY_QlQfkJxA",
    authDomain: "twmessenger-528a2.firebaseapp.com",
    databaseURL: "https://twmessenger-528a2.firebaseio.com",
    projectId: "twmessenger-528a2",
    storageBucket: "twmessenger-528a2.appspot.com",
    messagingSenderId: "288689082243",
    appId: "1:288689082243:web:21b73b3162f08959c2b0b6"

});
//const db = firebaseApp.firestore();

export default firebaseApp;