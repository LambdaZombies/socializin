import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    // const authLinks = (
    // <ul className="navbar-nav ml-auto">
    //   <li className="nav-item">
    //     <Link className="nav-link" to="/">
    //       Calander
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link className="nav-link" to="/">
    //       Dashboard
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href=""
    //       onClick={this.onLogoutClick.bind(this)}
    //       className="nav-link"
    //     >
    //       <img
    //         className="rounded-circle"
    //         src={user.avatar}
    //         alt={user.name}
    //         style={{ width: "25px", marginRight: "5px" }}
    //         title="You must have an uploaded image to display an avatar"
    //       />
    //       Logout
    //     </a>
    //   </li>
    // </ul>
    // );

    // const guestLinks = (
    //   <ul className="navbar-nav ml-auto">
    //     <li className="nav-item">
    //       <Link className="nav-link" to="/">
    //         Sign Up
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link className="nav-link" to="/">
    //         Login
    //       </Link>
    //     </li>
    //   </ul>
    // );

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
            data-target="#mobile-nav">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {' '}
                  Groups
                </Link>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/Calendar">
                Calendar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
