// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDSaT6zdR0Ct-lUDg049KN6fNsVbjpx_E",
  authDomain: "netflix-search-a351f.firebaseapp.com",
  projectId: "netflix-search-a351f",
  storageBucket: "netflix-search-a351f.appspot.com",
  messagingSenderId: "611387824903",
  appId: "1:611387824903:web:64aaf66b0ad004ff7f03a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
