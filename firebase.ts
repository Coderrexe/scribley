// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZbgdYYv046rR9hlU-cQioKxwwxrc5c30",
  authDomain: "scribley-18516.firebaseapp.com",
  projectId: "scribley-18516",
  storageBucket: "scribley-18516.firebasestorage.app",
  messagingSenderId: "650465132572",
  appId: "1:650465132572:web:febe5086ea79b6b9165fd9",
  measurementId: "G-D6JK30Y8NS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
