import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Calendar from "./Components/calendar";
import Login from "./Components/login";
import CreateAccount from "./Components/createAccount";
// import Settings from './Components/Settings';
// import LoanCreate from './Components/LoanCreate';
// import EditLoan from './Components/EditLoan';
// import AddAssignment from './Components/AddAssignment';
// import StripeWrapper from './Components/StripeBilling/StripeWrapper';
// import OpenLoans from './Components/OpenLoans';
// import ClosedLoans from './Components/ClosedLoans';
// import MyLoans from './Components/MyLoans';
// import BorrowerSettings from './Components/BorrowerSettings';
// import PurchasePage from './Components/PurchasePage';
// import PasswordReset from './Components/PasswordReset';
// import LearnMore from './Components/LearnMore';
// import ClientSelectedLoan from './Components/ClientSelectedLoan';
import registerServiceWorker from "./registerServiceWorker";
// import EditAssignment from './Components/EditAssignment';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={CreateAccount} />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
