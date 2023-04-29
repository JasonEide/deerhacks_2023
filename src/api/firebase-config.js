import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCDd2ceR_NfI-fQKtU_Ie7NpZvqKAzMh6U",
  authDomain: "deerhacks-project.firebaseapp.com",
  projectId: "deerhacks-project",
  storageBucket: "deerhacks-project.appspot.com",
  messagingSenderId: "627248215206",
  appId: "1:627248215206:web:f6d2b08c96a71652a13067",
  measurementId: "G-H2PGFEEFB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);