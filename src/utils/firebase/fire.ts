// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR1-G35AKzrr5w-SC1Xcts4ixcNpZaqrs",
  authDomain: "certificate-next-a829f.firebaseapp.com",
  projectId: "certificate-next-a829f",
  storageBucket: "certificate-next-a829f.appspot.com",
  messagingSenderId: "920483226447",
  appId: "1:920483226447:web:fb907670eb6f7bd2db5b3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
