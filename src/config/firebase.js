// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDwInTWaZUIntCBY5y1pdPyLWK4-so_CSk",
  authDomain: "spolayafragrance.firebaseapp.com",
  projectId: "spolayafragrance",
  storageBucket: "spolayafragrance.appspot.com",
  messagingSenderId: "764329688011",
  appId: "1:764329688011:web:8fe6d1dbf2f50d6d08d44e",
  measurementId: "G-79J4YDR2PW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// export const auth = getAuth(app);

export const db = getFirestore(app);