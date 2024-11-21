// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA3iCvrc1V240vdbn1arFycg5cGHhujSPs",
//   authDomain: "medication-review-e149a.firebaseapp.com",
//   projectId: "medication-review-e149a",
//   storageBucket: "medication-review-e149a.firebasestorage.app",
//   messagingSenderId: "245328204214",
//   appId: "1:245328204214:web:367ba7bdd065037cc2b117",
//   measurementId: "G-XYXYMNCFMY"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA3iCvrc1V240vdbn1arFycg5cGHhujSPs",
//   authDomain: "medication-review-e149a.firebaseapp.com",
//   projectId: "medication-review-e149a",
//   storageBucket: "medication-review-e149a.firebasestorage.app",
//   messagingSenderId: "245328204214",
//   appId: "1:245328204214:web:367ba7bdd065037cc2b117",
//   measurementId: "G-XYXYMNCFMY",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app); // Initialize Firebase Authentication
// const db = getFirestore(app); // Initialize Firestore

// export { app, auth, db }; // Export initialized services

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Firebase Authentication
import { getFirestore, doc, setDoc } from 'firebase/firestore'; // Firestore

// Firebase Configuration (use your own Firebase credentials)
const firebaseConfig = {
  apiKey: "AIzaSyA3iCvrc1V240vdbn1arFycg5cGHhujSPs",
  authDomain: "medication-review-e149a.firebaseapp.com",
  projectId: "medication-review-e149a",
  storageBucket: "medication-review-e149a.appspot.com",
  messagingSenderId: "245328204214",
  appId: "1:245328204214:web:367ba7bdd065037cc2b117",
  measurementId: "G-XYXYMNCFMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Firebase Authentication instance
const db = getFirestore(app);  // Firestore instance

export { auth, db };  // Export the Firebase services
