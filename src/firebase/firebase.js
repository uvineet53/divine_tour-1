// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWSD-gDAGbgMt-6ymdXVKrfVcdFe1qBZQ",
  authDomain: "react-todo-19247.firebaseapp.com",
  projectId: "react-todo-19247",
  storageBucket: "react-todo-19247.appspot.com",
  messagingSenderId: "628339363445",
  appId: "1:628339363445:web:a5991230da5671ef5e723c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
