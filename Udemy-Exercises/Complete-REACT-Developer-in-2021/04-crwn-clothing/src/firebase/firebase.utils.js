import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCwvOWw7vYk9e-vllypLwmY4XTZkA_4RBs",
    authDomain: "crwn-db-28e7f.firebaseapp.com",
    projectId: "crwn-db-28e7f",
    storageBucket: "crwn-db-28e7f.appspot.com",
    messagingSenderId: "97402215110",
    appId: "1:97402215110:web:a98fee7a6aa6e30ede95c7",
    measurementId: "G-YY5YNX47KD"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;