import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDGqqmW-TqFQ-nN8brHHBQKDNcfKHetPks",
    authDomain: "crwn-db-498ad.firebaseapp.com",
    projectId: "crwn-db-498ad",
    storageBucket: "crwn-db-498ad.appspot.com",
    messagingSenderId: "849554901915",
    appId: "1:849554901915:web:4750e9022f0eed1a33af3e",
    measurementId: "G-3G5V580FHG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

