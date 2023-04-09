import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCzv7uwKeR9j3GWMiEnBznGLBsxsbsOYyY",
  authDomain: "jumpeak-301b4.firebaseapp.com",
  databaseURL: "https://jumpeak-301b4-default-rtdb.firebaseio.com",
  projectId: "jumpeak-301b4",
  storageBucket: "jumpeak-301b4.appspot.com",
  messagingSenderId: "47575991629",
  appId: "1:47575991629:web:110a244a0a92ae3e852304"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
