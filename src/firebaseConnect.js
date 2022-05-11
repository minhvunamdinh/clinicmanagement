import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyB_s7y3wnFhPtvI3MHDZP3F9GilZ1kr37s",
  authDomain: "clinic-management-668c9.firebaseapp.com",
  databaseURL: "https://clinic-management-668c9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "clinic-management-668c9",
  storageBucket: "clinic-management-668c9.appspot.com",
  messagingSenderId: "568668980075",
  appId: "1:568668980075:web:3d48c0ca190192ccc2822e"
};

// Initialize Firebase


export const firebaseConnect = initializeApp(firebaseConfig);