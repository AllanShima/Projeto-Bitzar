// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQhwC6PXqmo9pi1aZQaUkDvb_jVxgVQPs",
  authDomain: "bitzar-docpilot.firebaseapp.com",
  projectId: "bitzar-docpilot",
  storageBucket: "bitzar-docpilot.firebasestorage.app",
  messagingSenderId: "514317362995",
  appId: "1:514317362995:web:d07476e13d18d5b509c046"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db}