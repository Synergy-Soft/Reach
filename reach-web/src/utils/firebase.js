import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendEmailVerification, reauthenticateWithCredential } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAB_Uhcah2EusmXqCk0QrJqRfChZuk9HvU",
  authDomain: "reach-d5ab4.firebaseapp.com",
  databaseURL: "https://reach-d5ab4-default-rtdb.firebaseio.com",
  projectId: "reach-d5ab4",
  storageBucket: "reach-d5ab4.appspot.com",
  messagingSenderId: "524109973538",
  appId: "1:524109973538:web:2522a20bd0dc4b5028e27b",
  measurementId: "G-8X30SKDVLH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();

// Function to sign in with email and password
const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Function to create a user with email and password
const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Send verification email
    return sendEmailVerification(userCredential.user);
  });
};

// Function to sign out
const signOutUser = () => {
  return signOut(auth);
};

const reauthenticateUser = (currentUser, credential) => {
  return reauthenticateWithCredential(currentUser, credential);
};

const sendVerificationEmail = (user) => {
  return sendEmailVerification(user);
};

export { auth, signIn, signUp, signOutUser, reauthenticateUser, sendVerificationEmail };
