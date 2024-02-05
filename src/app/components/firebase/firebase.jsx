import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDo7R-zsIuTMbpi4IuzRq0sy48ImHklnTY",
  authDomain: "note-firebase-7dfb4.firebaseapp.com",
  projectId: "note-firebase-7dfb4",
  storageBucket: "note-firebase-7dfb4.appspot.com",
  messagingSenderId: "1085323916508",
  appId: "1:1085323916508:web:8e3981d6ccae7d7309f019",
  measurementId: "G-KX4F28S4MP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
