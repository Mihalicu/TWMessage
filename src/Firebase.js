import firebase from "firebase";




const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyCpnhSJy7cNCh_X-R0oL2swxYIlLMFg73c",
        authDomain: "messenger-96b23.firebaseapp.com",
        databaseURL: "https://messenger-96b23.firebaseio.com",
        projectId: "messenger-96b23",
        storageBucket: "messenger-96b23.appspot.com",
        messagingSenderId: "194797594185",
        appId: "1:194797594185:web:e817819d382f0a75d0c198"
    }
);

const db = firebaseApp.firestore();

export default db;