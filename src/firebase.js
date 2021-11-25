import firebase from "firebase/compat";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAmd-x9orJLQxYUkU4k81JPX6aziUTMqmM",
    authDomain: "sharethings-68226.firebaseapp.com",
    projectId: "sharethings-68226",
    storageBucket: "sharethings-68226.appspot.com",
    messagingSenderId: "1061724427699",
    appId: "1:1061724427699:web:d8f38337ce3c70e7b867c6",
    measurementId: "G-052YCSVCLW"
});

const db = firebaseApp.firestore();

export {db};
