import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// I did already several TODO's: getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Sign-Up function
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

//Log-In function
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

//Logout function
export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user) );
    return unsub;
  }, [])

  return currentUser;
}