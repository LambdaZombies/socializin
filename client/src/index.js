import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Calendar from "./Components/calendar";
import Login from "./Components/login";
// import LoanList from './Component/LoanList';
// import Settings from './Component/Settings';
// import LoanCreate from './Component/LoanCreate';
// import EditLoan from './Component/EditLoan';
// import AddAssignment from './Component/AddAssignment';
// import StripeWrapper from './Component/StripeBilling/StripeWrapper';
// import OpenLoans from './Component/OpenLoans';
// import ClosedLoans from './Component/ClosedLoans';
// import MyLoans from './Component/MyLoans';
// import BorrowerSettings from './Component/BorrowerSettings';
// import PurchasePage from './Component/PurchasePage';
// import PasswordReset from './Component/PasswordReset';
// import LearnMore from './Component/LearnMore';
// import ClientSelectedLoan from './Component/ClientSelectedLoan';
import registerServiceWorker from "./registerServiceWorker";
// import EditAssignment from './Component/EditAssignment';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/login" component={Login} />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
