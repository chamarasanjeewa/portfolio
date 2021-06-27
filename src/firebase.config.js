import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBlMFpcSsr0xI9_hZ-wVc1khpJ30kyGSTw",
  authDomain: "cv-chamara.firebaseapp.com",
  projectId: "cv-chamara",
  storageBucket: "cv-chamara.appspot.com",
  messagingSenderId: "943773985501",
  appId: "1:943773985501:web:eb711c4e442195917a0934"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
