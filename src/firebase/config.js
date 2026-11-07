import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk8slhdGpiqVc7DxNDIuFlN3rrLVnfEeE",
  authDomain: "campanita-billou.firebaseapp.com",
  projectId: "campanita-billou",
  storageBucket: "campanita-billou.firebasestorage.app",
  messagingSenderId: "352727446360",
  appId: "1:352727446360:web:9ee1e10911ca03357fab2d",
  measurementId: "G-YK3BVNHHBV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
