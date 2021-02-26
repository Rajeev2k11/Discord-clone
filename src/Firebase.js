import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCoaOMfPurBTlZDxjYQsStEk5RUm5sgIsE",
    authDomain: "discord-clone-18a6f.firebaseapp.com",
    projectId: "discord-clone-18a6f",
    storageBucket: "discord-clone-18a6f.appspot.com",
    messagingSenderId: "422943627099",
    appId: "1:422943627099:web:a7204eae74c3dbd000ac7e",
    measurementId: "G-3XKWR4GTPC"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;