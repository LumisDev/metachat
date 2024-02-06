// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAfQcqTmfR-fJJ8eXKKfdHYbKnNs6N8WA",
  authDomain: "metachat-51d6d.firebaseapp.com",
  projectId: "metachat-51d6d",
  storageBucket: "metachat-51d6d.appspot.com",
  messagingSenderId: "931278166756",
  appId: "1:931278166756:web:4f97ddabd555a1693beaf1",
  measurementId: "G-K89XLJW3NK",
} satisfies FirebaseOptions;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);