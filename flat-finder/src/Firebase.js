// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_Hh2jEdqrrppiVg_ABw9NOiGMy8bD8AQ",
  authDomain: "flat-project-1ac7a.firebaseapp.com",
  projectId: "flat-project-1ac7a",
  storageBucket: "flat-project-1ac7a.appspot.com",
  messagingSenderId: "936956603489",
  appId: "1:936956603489:web:eee5f5da179d0b43044e20",
  measurementId: "G-S9L78CRYRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

