//**** copy it from console

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGagjxI6H8HXpOCPUJwYpzYwa2HtriEDo",
  authDomain: "fullstack-app-a9fb9.firebaseapp.com",
  projectId: "fullstack-app-a9fb9",
  storageBucket: "fullstack-app-a9fb9.appspot.com",
  messagingSenderId: "785265938814",
  appId: "1:785265938814:web:9116c1356805c7db82232f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//*** add these consts
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
