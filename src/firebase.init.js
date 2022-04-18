// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUMhSGscqk9boXCm48lsAySrv0aT5lV9o",
  authDomain: "ema-john-practice-31034.firebaseapp.com",
  projectId: "ema-john-practice-31034",
  storageBucket: "ema-john-practice-31034.appspot.com",
  messagingSenderId: "318938770071",
  appId: "1:318938770071:web:77da86251d10bddbb417d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
