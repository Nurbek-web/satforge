import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDwY9o-4rTAZF3nPlPdKanHKXn2CcPnooA",
  authDomain: "olympiad-4ec53.firebaseapp.com",
  projectId: "olympiad-4ec53",
  storageBucket: "olympiad-4ec53.appspot.com",
  messagingSenderId: "605415709669",
  appId: "1:605415709669:web:30b515a8afe8a404042d0c",
};

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
