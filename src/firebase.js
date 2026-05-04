import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvwBycAFoS0CqigvI2bsAtQa7KhKyyc8E",
  authDomain: "saidortegweb.firebaseapp.com",
  projectId: "saidortegweb",
  storageBucket: "saidortegweb.firebasestorage.app",
  messagingSenderId: "370126366303",
  appId: "1:370126366303:web:5f835133c4aec0c2935dea",
  measurementId: "G-78N2RW4BWN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
