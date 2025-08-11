// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH,
  projectId: import.meta.env.VITE_FB_PROJECT,
  storageBucket: "fir-login-8e6a3.firebasestorage.app",
  messagingSenderId: "225578314310",
  appId: "1:225578314310:web:5c620b7e1bbb209008b847",
  measurementId: "G-WQSSMMGWQM"
};


console.log("api key",import.meta.env.VITE_FB_API_KEY)
console.log("auth",import.meta.env.VITE_FB_AUTH)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);