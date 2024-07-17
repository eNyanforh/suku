// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM4FgyLQ16_G7em5lwQ-G1uMK3Hp7h59c",
  authDomain: "mycampuz-29516.firebaseapp.com",
  projectId: "mycampuz-29516",
  storageBucket: "mycampuz-29516.appspot.com",
  messagingSenderId: "1012086327408",
  appId: "1:1012086327408:web:e1c0b0888f338d7ee28cb5"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
