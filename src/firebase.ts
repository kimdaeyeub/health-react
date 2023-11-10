import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlpuoiqWOSVxUhHQuHndzI0-Qwv4DJ9kg",
  authDomain: "health-11a0b.firebaseapp.com",
  projectId: "health-11a0b",
  storageBucket: "health-11a0b.appspot.com",
  messagingSenderId: "172240889987",
  appId: "1:172240889987:web:537aecbb9cd3281488d3b6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storate = getStorage(app);
