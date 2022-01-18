// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCH1INCkajumCWlfrK1FULCTCRjcohWkGI",

  authDomain: "f-corona-oso.firebaseapp.com",

  projectId: "f-corona-oso",

  storageBucket: "f-corona-oso.appspot.com",

  messagingSenderId: "757248514600",

  appId: "1:757248514600:web:8cc0a1a2267d4d1099f31d"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

