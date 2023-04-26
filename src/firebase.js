import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

    apiKey: "AIzaSyCDbu24wV2WjLSJm39JU8dTKiPhozCK1QE",

    authDomain: "my-portfolio-8837d.firebaseapp.com",
  
    projectId: "my-portfolio-8837d",
  
    storageBucket: "my-portfolio-8837d.appspot.com",
  
    messagingSenderId: "861458120798",
  
    appId: "1:861458120798:web:5e66a8834e8978c1d9f4cf",
  
    measurementId: "G-02ZER1P0Y5"
  
  
  };
  


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);