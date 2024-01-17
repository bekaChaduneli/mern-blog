// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f0d68.firebaseapp.com",
  projectId: "mern-blog-f0d68",
  storageBucket: "mern-blog-f0d68.appspot.com",
  messagingSenderId: "1006498770781",
  appId: "1:1006498770781:web:17b1fb18f9de3273c0c2b4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
