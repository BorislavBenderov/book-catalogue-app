import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDG9rCx5tUwh1mMIw7H1XqqNx54V3CDn9U",
  authDomain: "book-catalogue-app-e23b8.firebaseapp.com",
  projectId: "book-catalogue-app-e23b8",
  storageBucket: "book-catalogue-app-e23b8.appspot.com",
  messagingSenderId: "375674811410",
  appId: "1:375674811410:web:bce5c0f4b44b8b571814cb",
  measurementId: "G-GE7V5PNLDZ"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);