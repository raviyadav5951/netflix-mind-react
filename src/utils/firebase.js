// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmQaEzGacvodgN6IYzvs8w4UHUDpBAyWA",
  authDomain: "netflixgpt-cc1d5.firebaseapp.com",
  projectId: "netflixgpt-cc1d5",
  storageBucket: "netflixgpt-cc1d5.appspot.com",
  messagingSenderId: "221532874489",
  appId: "1:221532874489:web:38e140ded996c968c7a428",
  measurementId: "G-4N5B03ZBGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();