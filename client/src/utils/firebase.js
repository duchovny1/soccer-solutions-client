import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKODIJFDfK_Voerm7xOOEZPRlUuhqwJWs",
  authDomain: "soccer-solutions-app.firebaseapp.com",
  projectId: "soccer-solutions-app",
  storageBucket: "soccer-solutions-app.appspot.com",
  messagingSenderId: "310171048557",
  appId: "1:310171048557:web:e37dfcc5ef92deae32bd64",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const auth = firebase.auth();
