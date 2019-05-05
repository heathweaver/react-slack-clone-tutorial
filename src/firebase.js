import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


// Initialize Firebase
  var config = {
    apiKey: process.env.REACT_APP_KEY,
    authDomain: "react-slack-clone-31602.firebaseapp.com",
    databaseURL: "https://react-slack-clone-31602.firebaseio.com",
    projectId: "react-slack-clone-31602",
    storageBucket: "react-slack-clone-31602.appspot.com",
    messagingSenderId: "76495359329",
  };
  firebase.initializeApp(config);

export default firebase;
