// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOc4JVHnqTW91uwMwlzdqcB9TIq69Na_A",
  authDomain: "expense-tracker-1b5c9.firebaseapp.com",
  projectId: "expense-tracker-1b5c9",
  storageBucket: "expense-tracker-1b5c9.appspot.com",
  messagingSenderId: "258227017835",
  appId: "1:258227017835:web:7d7ff915fc91389b52392e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };