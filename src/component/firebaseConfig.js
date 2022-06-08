import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDe_BsmvtwsGUD5cjb49j6wHxH9CP7ccgU",
  authDomain: "e-commerce-contact-ace7b.firebaseapp.com",
  databaseURL: "https://e-commerce-contact-ace7b-default-rtdb.firebaseio.com",
  projectId: "e-commerce-contact-ace7b",
  storageBucket: "e-commerce-contact-ace7b.appspot.com",
  messagingSenderId: "770902360843",
  appId: "1:770902360843:web:0b5d37e1ad508fc3d5580e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

