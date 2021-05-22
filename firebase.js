import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnZpNZ0YjdjDd3841AAYHbO9-rPGoKS9Y",
  authDomain: "yt-16244.firebaseapp.com",
  projectId: "yt-16244",
  storageBucket: "yt-16244.appspot.com",
  messagingSenderId: "252204520756",
  appId: "1:252204520756:web:99d290c8b0b9af754d0161",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
