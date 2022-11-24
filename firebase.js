// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmC7Y7JGRW1ClaEJkhH6bEBP8Mg652SFc",
  authDomain: "faceapp-1b484.firebaseapp.com",
  projectId: "faceapp-1b484",
  storageBucket: "faceapp-1b484.appspot.com",
  messagingSenderId: "1005088554147",
  appId: "1:1005088554147:web:f72623a86a314307d21316"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) :getApp();
const db = getFirestore();
const storage = getStorage();

export {app,db,storage};