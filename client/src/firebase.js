// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7f822.firebaseapp.com",
  projectId: "mern-estate-7f822",
  storageBucket: "mern-estate-7f822.firebasestorage.app",
  messagingSenderId: "193696025808",
  appId: "1:193696025808:web:4b36a5f217b27731eea2d5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);