// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBK7KohhE4189XEWejPGlJVoHqpY3Ch3B8",
    authDomain: "react-chat-6ccf5.firebaseapp.com",
    projectId: "react-chat-6ccf5",
    storageBucket: "react-chat-6ccf5.appspot.com",
    messagingSenderId: "725633575964",
    appId: "1:725633575964:web:d3a2d2cf79b579be86c3d9",
    measurementId: "G-4NT14TPW5L"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);