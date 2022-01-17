import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSfzkUaa3RKj1WcLxUlumng9KDb60w_Tk",
  authDomain: "job-tracker-4bd08.firebaseapp.com",
  projectId: "job-tracker-4bd08",
  storageBucket: "job-tracker-4bd08.appspot.com",
  messagingSenderId: "154944314868",
  appId: "1:154944314868:web:d2e89b56a77da9ee302da1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
