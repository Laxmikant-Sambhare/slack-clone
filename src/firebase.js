import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGrWYFFUOKKq-6YI8_mrHV6SWtwEwksGw",
  authDomain: "slack-clone-e30d5.firebaseapp.com",
  projectId: "slack-clone-e30d5",
  storageBucket: "slack-clone-e30d5.appspot.com",
  messagingSenderId: "430401318510",
  appId: "1:430401318510:web:6abdc5b156ba78e8fc407f",
  measurementId: "G-590HS0XCWF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
//enabling googleauthentication
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
