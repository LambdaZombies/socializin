import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Navbar from "./navbar";
import firebase from "./firebase";
import "../CSS/login.css";

const sendToken = (tokenId, sendEmail) => {
  // token setter
  sessionStorage.setItem("tokenId", tokenId);
  sessionStorage.setItem("email", sendEmail);
  console.log("REDIRECTING!!!!!!!!!!!!!!!!!");
  window.location = "/calendar";
};

const uiConfig = {
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccess: credential => {
      firebase.auth().onAuthStateChanged(user => {
        sessionStorage.setItem("credential", credential);
        const defImg = "https://s3.us-east-2.amazonaws.com/djangorpg/photo.png";
        if (
          user.photoURL === null ||
          user.photoUrl === "" ||
          user.photoURL === undefined
        ) {
          sessionStorage.setItem("photoUrl", defImg);
        } else {
          sessionStorage.setItem("photoUrl", user.photoURL);
        }
        console.log("got the ID!!", user.uid);
        console.log("firebase user", user);

        sendToken(user.uid, user.email);
      });
    },
  },
  // credentialHelper: firebase.auth.CredentialHelper.NONE,
  // Terms of service url.
  // tosUrl: '<your-tos-url>',
};

export default function AccountLogin() {
  // console.log('TOKEN ID:', this.props.tokenId);

  return (
    <div>
      <Navbar />
      <div className="Account-title-containter">
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </div>
  );
}
