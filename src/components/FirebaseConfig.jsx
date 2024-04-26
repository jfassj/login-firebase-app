// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBoKboE4IqHcKCEW3soBmV0lLBR-dxPuw",
  authDomain: "rc-react-b5584.firebaseapp.com",
  projectId: "rc-react-b5584",
  storageBucket: "rc-react-b5584.appspot.com",
  messagingSenderId: "808858726205",
  appId: "1:808858726205:web:6b343ae3e8501c23469f54",
  measurementId: "G-K018P47W68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);