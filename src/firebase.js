// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shop-react-b104d.firebaseapp.com",
  projectId: "shop-react-b104d",
  storageBucket: "shop-react-b104d.appspot.com",
  messagingSenderId: "610797593078",
  appId: "1:610797593078:web:0f1a96e902408885c8e7d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
