import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpAyomPPXJFUBnMdpFdedSaA7LVGyfpNg",
    authDomain: "clone-d93c8.firebaseapp.com",
    projectId: "clone-d93c8",
    storageBucket: "clone-d93c8.appspot.com",
    messagingSenderId: "781135199531",
    appId: "1:781135199531:web:e9a84654a1c3427cb7d96e",
    measurementId: "G-MLVRNQ5G2J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const db= firebaseApp.firestore();
  const auth =firebase.auth();

  export {db, auth};