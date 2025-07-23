/// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB7VUo0fix8_2zApV0eVTDYbPwVZILi_YQ",
  authDomain: "tectonic-1b2b8.firebaseapp.com",
  projectId: "tectonic-1b2b8",
  storageBucket: "tectonic-1b2b8.appspot.com", // ✅ FIXED
  messagingSenderId: "455498676144",
  appId: "1:455498676144:web:481a8a54167378634f0875",
  measurementId: "G-V8F9QETEJK",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
