// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLmYcsJOTQJmAYAhwZkMx9bGLMEyLvUOM",
  authDomain: "ocardapio-c4c2d.firebaseapp.com",
  projectId: "ocardapio-c4c2d",
  storageBucket: "ocardapio-c4c2d.appspot.com",
  messagingSenderId: "899320661416",
  appId: "1:899320661416:web:0f16e10357ff74068b499d",
  measurementId: "G-YYTFN74FHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth(app);