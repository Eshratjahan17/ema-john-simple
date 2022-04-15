// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN_jBnKxt25Ee6TITOLoasZL-ZSiJ3wCU",
  authDomain: "ema-jhon-firebase-b808f.firebaseapp.com",
  projectId: "ema-jhon-firebase-b808f",
  storageBucket: "ema-jhon-firebase-b808f.appspot.com",
  messagingSenderId: "85251069788",
  appId: "1:85251069788:web:e697c2d0246b523aa6d399",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;