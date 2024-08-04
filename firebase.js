import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDF2ntenBU2QW56FBMt6gmAWnfHTPLoTbA",
    authDomain: "project2-49b48.firebaseapp.com",
    projectId: "project2-49b48",
    storageBucket: "project2-49b48.appspot.com",
    messagingSenderId: "948589817214",
    appId: "1:948589817214:web:3e8692e8bc3d44af8a972f",
    measurementId: "G-265EWXDTWD"
  };

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export {app, firestore}