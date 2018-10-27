import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import axios from "axios";
import base from "./base";
import firebase from "./firebase";
import Navbar from "./navbar";
import "../CSS/createAccount.css";

const uiConfig = {
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => {
      firebase.auth().onAuthStateChanged(user => {
        console.log("got the ID!!", user.uid);

        // persist signup data so additional info can be added and sent to backend
        sessionStorage.setItem("tokenId", user.uid);
        sessionStorage.setItem("email", user.email);
        sessionStorage.setItem("name", user.displayName);
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
      });
      window.location = "/signup";
    },
  },
  // credentialHelper: firebase.auth.CredentialHelper.NONE,
  // Terms of service url.
  // tosUrl: '<your-tos-url>',
};

class AccountCreation extends Component {
  constructor() {
    super();
    this.state = {
      phoneNumber: "",
      email: sessionStorage.getItem("email"),
      name: sessionStorage.getItem("name"),
      acceptText: false,
      acceptEmail: false,
      tokenId: sessionStorage.getItem("tokenId"),
      invalidPhoneNumber: false,
      invalidCheckBoxSelection: false,
    };
  }

  submitClientAccountInfo = () => {
    this.sendToDB();
    window.location = "/calendar";
  };

  handleInputChange = event => {
    const contactNo = event.target.value.substring(0, 10);
    this.setState({ phoneNumber: contactNo });
  };

  handleTextAlerts = () => {
    this.setState({ acceptText: !this.state.acceptText });
  };

  handleEmailAlerts = () => {
    this.setState({ acceptEmail: !this.state.acceptEmail });
  };

  sendToDB = async () => {
    const userInfo = {
      name: this.state.name,
      email: this.state.email,
      mobileNumber: this.state.phoneNumber,
      acceptTexts: this.state.acceptText,
      acceptEmails: this.state.acceptEmail,
      tokenId: this.state.tokenId,
    };
    console.log("sending to db:", userInfo);
    try {
      await axios.post(`${base}/newuser`, userInfo);
      // .then(res => {
      //   console.log("Response from server: ", res);
      // })
    } catch (err) {
      throw err;
    }
  };

  render() {
    const token = sessionStorage.getItem("tokenId");
    if (token === null || token === undefined || token === "") {
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
    } else if (token) {
      return (
        <div className="Create">
          <Navbar />
          <div className="Create-title-containter">
            <h1> Client Account Creation</h1>
          </div>
          <div>
            <form className="Create-form-container">
              <fieldset>
                <legend>Additional information:</legend>
                Mobile Phone:{" "}
                <input type="text" onChange={this.handleInputChange} />
                <br />
                <br />
                <input
                  type="checkbox"
                  name="acceptText"
                  onChange={this.handleTextAlerts}
                />{" "}
                I would like to recieve TEXT notifications<br />
                <input
                  type="checkbox"
                  name="acceptEmail"
                  onChange={this.handleEmailAlerts}
                />{" "}
                I would like to recieve EMAIL notifications<br />
                <br />
              </fieldset>
            </form>
            <button onClick={this.submitClientAccountInfo}>Submit</button>
          </div>
        </div>
      );
    }
  }
}

export default AccountCreation;
