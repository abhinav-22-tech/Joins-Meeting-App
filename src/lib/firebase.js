import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAswSs5I_Ow2zqhEKy1cfpZTLS8sy7PYsA",
  authDomain: "meeting-3ecfa.firebaseapp.com",
  projectId: "meeting-3ecfa",
  storageBucket: "meeting-3ecfa.appspot.com",
  messagingSenderId: "940410080677",
  appId: "1:940410080677:web:dad8c866e2b666c92c6c4c",
  measurementId: "G-7QHJGCKWLK"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
