import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSy...", 
  authDomain: "telier-news.firebaseapp.com",
  projectId: "telier-news",
  storageBucket: "telier-news.appspot.com",
  messagingSenderId: "xxxxxx",
  appId: "xxxxxx"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
