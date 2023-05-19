// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEJJFaXCHZD_gjMb7HqjEpk64yWTiTtyE",
  authDomain: "unique-car-toys.firebaseapp.com",
  projectId: "unique-car-toys",
  storageBucket: "unique-car-toys.appspot.com",
  messagingSenderId: "307229025238",
  appId: "1:307229025238:web:53625181dabb86bfa5fa77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;