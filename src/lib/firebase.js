import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEMyPci8807PI3Pvj1J-Ijwsv0lRHrFoc",
  authDomain: "x-login-50d0b.firebaseapp.com",
  projectId: "x-login-50d0b",
  storageBucket: "x-login-50d0b.appspot.com",
  messagingSenderId: "289315013382",
  appId: "1:289315013382:web:82ca68c17e90035b84d487",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
