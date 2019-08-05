import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyD0Sm_HA-OdPHMLFZoOgkN-XRQvh2VTgBg",
  authDomain: "project-management-bf553.firebaseapp.com",
  databaseURL: "https://project-management-bf553.firebaseio.com",
  projectId: "project-management-bf553",
  storageBucket: "",
  messagingSenderId: "297255664377",
  appId: "1:297255664377:web:16d717f1b69f1ccb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
