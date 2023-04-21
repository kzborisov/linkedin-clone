// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa64ATQoKK5J5fKG4Zi-l1Uc5E9Ip2OqA",
  authDomain: "linkedin-clone-efeab.firebaseapp.com",
  projectId: "linkedin-clone-efeab",
  storageBucket: "linkedin-clone-efeab.appspot.com",
  messagingSenderId: "143321826658",
  appId: "1:143321826658:web:f5c0ae191aaca8d6d3583b",
  measurementId: "G-GZ1V6QHL1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app}

