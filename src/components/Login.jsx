import React from "react";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

function Login() {
  return (
    <Router>
      <div className="creatorbody">
        <div className="App">
          <div className="App__Aside" refs="stars">
            <nav className="navbarchange">GetAway</nav>
          </div>
          <div className="App__Form">
            <div className="FormTitle">
              <NavLink
                to="/sign-in"
                className="FormTitle__Link"
                activeClassName="FormTitle__Link--Active"
              >
                <div className="loginpage">Login </div>
              </NavLink>
              <br />
              <NavLink
                exact
                to="/"
                className="FormTitle__Link"
                activeClassName="FormTitle__Link--Active "
              >
                <div className="loginpage"> Register </div>
              </NavLink>
            </div>
            <Route path="/" exact component={SignInForm}></Route>
            <Route path="/sign-up" exact component={SignUpForm}></Route>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Login;
