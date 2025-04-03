// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLsKRWByTXpxiqFcLW13AYo2USoEe7nsk",
  authDomain: "assist-da00f.firebaseapp.com",
  projectId: "assist-da00f",
  storageBucket: "assist-da00f.firebasestorage.app",
  messagingSenderId: "550645063692",
  appId: "1:550645063692:web:07956df761ddf3c332ce29",
  measurementId: "G-NY81JD8TXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);