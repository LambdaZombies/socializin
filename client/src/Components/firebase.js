const firebase = require("firebase/app");
require("firebase/auth");

// Initialize Firebase

const config = {
  apiKey: "AIzaSyDcnM8YlYQD50UORZ1T-KzMISZtcJ3B8VQ",
  authDomain: "socializin-lambda.firebaseapp.com",
  databaseURL: "https://socializin-lambda.firebaseio.com",
  projectId: "socializin-lambda",
  storageBucket: "socializin-lambda.appspot.com",
  messagingSenderId: "367084921629",
};

// Check to see if FirebaseUI Widget is Initialized
// Initialize FirebaseUI Widget using Firebase
if (!firebase.apps.length ? firebase.initializeApp(config) : firebase.app());

export default firebase;
