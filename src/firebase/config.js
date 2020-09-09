import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJr4o7UXb9Crx7MUlFsZiXkJ-RGZVfWX0",
  authDomain: "firegram-1420.firebaseapp.com",
  databaseURL: "https://firegram-1420.firebaseio.com",
  projectId: "firegram-1420",
  storageBucket: "firegram-1420.appspot.com",
  messagingSenderId: "741299909946",
  appId: "1:741299909946:web:f58f326583f79059bc0c03",
  measurementId: "G-RY7Z6RR960",
};

firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
