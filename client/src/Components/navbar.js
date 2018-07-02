import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "./firebase";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      tokenId: sessionStorage.getItem("tokenId"),
    };
  }

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("signed out successfully!");
        sessionStorage.clear();
        window.location = "/";
      })
      .catch(error => {
        console.log("error signing out", error);
      });
  };

  login() {
    console.log(this.state);
    window.location = "/login";
  }

  render() {
    const token = this.state.tokenId;
    let auth;
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Calendar
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logout} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );
    if (token === null || token === undefined || token === "")
      auth = guestLinks;
    else auth = authLinks;

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Socializin
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {auth}
        </div>
      </nav>
    );
  }
}
