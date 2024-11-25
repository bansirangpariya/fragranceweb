// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDJtVX4uCLElD1p5V2owE6fokDd00QMsDM",
  authDomain: "login-bo.firebaseapp.com",
  projectId: "login-bo",
  storageBucket: "login-bo.appspot.com",
  messagingSenderId: "307514314694",
  appId: "1:307514314694:web:de05ede2a71b27b0af2cc7",
  measurementId: "G-T3W22NHE9P",
  databaseUrl: "https://login-bo-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
