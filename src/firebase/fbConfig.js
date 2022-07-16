import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY


var firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "angello-kanban.firebaseapp.com",
    projectId: "angello-kanban",
    storageBucket: "angello-kanban.appspot.com",
    messagingSenderId: "767079459476",
    appId: "1:767079459476:web:e96335e2d5b533db90e281",
    measurementId: "G-4F2HXVZEHQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics();

const db = firebase.firestore()

// firebase.firestore().enablePersistence()

export { firebase, db }
