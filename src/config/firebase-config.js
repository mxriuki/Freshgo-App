// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd6jdfwOHaBa5imaNFUB07mpN-ZZJ3loU",
  authDomain: "freshgo-d41e3.firebaseapp.com",
  projectId: "freshgo-d41e3",
  storageBucket: "freshgo-d41e3.appspot.com",
  messagingSenderId: "1062459611061",
  appId: "1:1062459611061:web:8c01c938427bd2fbe5ebfc",
  measurementId: "G-0J11KGGKE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);