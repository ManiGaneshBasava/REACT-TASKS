import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAWNmnSGjk3X0F28MfAexF2ap9NkJFE3PY",
  authDomain: "login-firebase-f756b.firebaseapp.com",
  projectId: "login-firebase-f756b",
  storageBucket: "login-firebase-f756b.appspot.com",
  messagingSenderId: "933674772565",
  appId: "1:933674772565:web:abdbfe7760fc3727c7ccdc",
  measurementId: "G-QLHTRKVZBP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
