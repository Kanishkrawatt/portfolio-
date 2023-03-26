import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_apikey,
  authDomain: process.env.NEXT_PUBLIC_FB_authDomain,
  databaseURL: process.env.NEXT_PUBLIC_FB_databaseURL,
  projectId: process.env.NEXT_PUBLIC_FB_projectId,
  storageBucket: process.env.NEXT_PUBLIC_FB_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FB_appId,
  measurementId: process.env.NEXT_PUBLIC_FB_measurementId,
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Auth

import { getAuth } from "firebase/auth";
export const auth = getAuth();


// Firestore

import { getFirestore } from "firebase/firestore";
const db = getFirestore(app);
// Export db

export default db;
