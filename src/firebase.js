import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCvwBycAFoS0CqigvI2bsAtQa7KhKyyc8E",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "saidortegweb.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "saidortegweb",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "saidortegweb.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "370126366303",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:370126366303:web:5f835133c4aec0c2935dea",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-78N2RW4BWN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
