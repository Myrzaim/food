
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAbPZ-ca-QkkpElSp-DygGOYsGCmZeqV5Q",
  authDomain: "food-71df0.firebaseapp.com",
  projectId: "food-71df0",
  storageBucket: "food-71df0.appspot.com",
  messagingSenderId: "15565703735",
  appId: "1:15565703735:web:1772c1443e04d457198db2",
  measurementId: "G-K01QL4EXPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);