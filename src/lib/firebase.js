import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-c8c91.firebaseapp.com",
  projectId: "reactchat-c8c91",
  storageBucket: "reactchat-c8c91.appspot.com",
  messagingSenderId: "556487415625",
  appId: "1:556487415625:web:1a1321b13460d3fb666c98",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
