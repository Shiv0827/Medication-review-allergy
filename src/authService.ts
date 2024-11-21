// Import the necessary Firebase functions and SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3iCvrc1V240vdbn1arFycg5cGHhujSPs",
  authDomain: "medication-review-e149a.firebaseapp.com",
  projectId: "medication-review-e149a",
  storageBucket: "medication-review-e149a.firebasestorage.app",
  messagingSenderId: "245328204214",
  appId: "1:245328204214:web:367ba7bdd065037cc2b117",
  measurementId: "G-XYXYMNCFMY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

/**
 * Logs in a user using their email and password.
 * @param email - The user's email address.
 * @param password - The user's password.
 * @returns A Promise that resolves with the authenticated user object.
 * @throws An error if login fails.
 */
export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Return the user object
  } catch (error: any) {
    let errorMessage = "An error occurred during login.";
    switch (error.code) {
      case "auth/invalid-email":
        errorMessage = "Invalid email address.";
        break;
      case "auth/user-disabled":
        errorMessage = "This user has been disabled.";
        break;
      case "auth/user-not-found":
        errorMessage = "No user found with this email.";
        break;
      case "auth/wrong-password":
        errorMessage = "Incorrect password.";
        break;
    }
    throw new Error(errorMessage);
  }
};

/**
 * Signs up a new user and stores additional information in Firestore.
 * @param userData - An object containing the user's details (email, password, and other information).
 * @returns A Promise that resolves with the newly created user object.
 * @throws An error if signup fails.
 */
export const signupUser = async (data: {
  name: string;
  email: string;
  password: string;
  age: number;
  gender: string;
  phone: string;
  allergies: string;
}) => {
  try {
    // Create a user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);

    const user = userCredential.user;
    const uid = user.uid;

    // Save additional user information to Firestore
    await setDoc(doc(db, 'users', uid), {
      name: data.name,
      email: data.email,
      age: data.age,
      gender: data.gender,
      phone: data.phone,
      allergies: data.allergies,
    });

    return user; // Return the user object after successful signup
  } catch (error: any) {
    let errorMessage = 'An error occurred during signup.';
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'The email address is already in use by another account.';
        break;
      case 'auth/invalid-email':
        errorMessage = 'The email address is not valid.';
        break;
      case 'auth/weak-password':
        errorMessage = 'The password is too weak.';
        break;
    }
    throw new Error(errorMessage);
  }
};

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// // import { auth, db } from "./firebase";
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

// /**
//  * Logs in a user using their email and password.
//  * @param email - The user's email address.
//  * @param password - The user's password.
//  * @returns A Promise that resolves with the authenticated user object.
//  * @throws An error if login fails.
//  */


// export const loginUser = async (email: string, password: string) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     return userCredential.user; // Return the user object
//   } catch (error: any) {
//     let errorMessage = 'An error occurred during login.';
//     switch (error.code) {
//       case 'auth/invalid-email':
//         errorMessage = 'Invalid email address.';
//         break;
//       case 'auth/user-disabled':
//         errorMessage = 'This user has been disabled.';
//         break;
//       case 'auth/user-not-found':
//         errorMessage = 'No user found with this email.';
//         break;
//       case 'auth/wrong-password':
//         errorMessage = 'Incorrect password.';
//         break;
//     }
//     throw new Error(errorMessage);
//   }
// };

