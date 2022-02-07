import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA844ahyDhdGrVAHtqo9Y4RkCPmDXs5Hc4",
  authDomain: "mravka-zanimavka.firebaseapp.com",
  databaseURL: "https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mravka-zanimavka",
  storageBucket: "mravka-zanimavka.appspot.com",
  messagingSenderId: "90942997330",
  appId: "1:90942997330:web:d37f6836e9010bb6a6308b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}