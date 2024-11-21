// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3iCvrc1V240vdbn1arFycg5cGHhujSPs",
  authDomain: "medication-review-e149a.firebaseapp.com",
  projectId: "medication-review-e149a",
  storageBucket: "medication-review-e149a.firebasestorage.app",
  messagingSenderId: "245328204214",
  appId: "1:245328204214:web:367ba7bdd065037cc2b117",
  measurementId: "G-XYXYMNCFMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getAuth(app);