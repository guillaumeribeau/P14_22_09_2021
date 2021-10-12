import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCl41iWD6tTsj5Kbl-47XB2hOQAVzWFM8M",
  authDomain: "argent-bank-p14-openclassrooms.firebaseapp.com",
  projectId: "argent-bank-p14-openclassrooms",
  storageBucket: "argent-bank-p14-openclassrooms.appspot.com",
  messagingSenderId: "698849197325",
  appId: "1:698849197325:web:34e6b419f5955684280444",
  databaseURL:
    "https://argent-bank-p14-openclassrooms-default-rtdb.europe-west1.firebasedatabase.app/",
};

// initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
