import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyC3S6cSVpLuMuFsx7r5Q5vwagXSegxFRMI",
    authDomain: "crwn-db-d6aa0.firebaseapp.com",
    databaseURL: "https://crwn-db-d6aa0.firebaseio.com",
    projectId: "crwn-db-d6aa0",
    storageBucket: "crwn-db-d6aa0.appspot.com",
    messagingSenderId: "426775406495",
    appId: "1:426775406495:web:170163d2543bd732e17faa",
    measurementId: "G-87PXFZBXMP"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
