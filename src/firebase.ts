// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXZRtY3_g7brye4vclm-aJ2kSRFTARy9Q",
  authDomain: "todo-601b1.firebaseapp.com",
  databaseURL: "https://todo-601b1-default-rtdb.firebaseio.com",
  projectId: "todo-601b1",
  storageBucket: "todo-601b1.appspot.com",
  messagingSenderId: "257187892900",
  appId: "1:257187892900:web:70ea3ded0947c0cae32031",
  measurementId: "G-89Z7N4SMP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);