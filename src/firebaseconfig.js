// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "*****************",
  authDomain: "*****",
  projectId: "*****",
  storageBucket: "*****",
  messagingSenderId: "****",
  appId: "***",
  measurementId: "****"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
