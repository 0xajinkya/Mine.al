// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk7J2opObxwbN5-ao3amD6uNlxzi5j0n4",
  authDomain: "mineal-social-364620.firebaseapp.com",
  projectId: "mineal-social-364620",
  storageBucket: "mineal-social-364620.appspot.com",
  messagingSenderId: "120373843654",
  appId: "1:120373843654:web:4869af13fbd0e154d5e9c7",
  measurementId: "G-N81QZLQEBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);