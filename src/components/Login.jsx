import React, { Component } from "react";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./SignUpForm.jsx";
import SignInForm from "./SignInForm.jsx";

class Login extends Component {
  render() {
    return (
      <Router>
        <header>

          <nav className="nav">

            <div className="brand-logo">
              GetAway
                {/* GA */}
            </div>

            <div className="nav-wrapper">

              <div
                data-target="slide-out"
                className="sidenav-trigger hide-on-large-only"
              >
                <i className="material-icons">menu</i>
              </div>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <NavLink className="nav-button waves-effect" to="/">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-button waves-effect"
                    exact
                    to="/sign-up"
                  >
                    Register
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>



          <ul id="slide-out" className="sidenav">
            <li>
              <div className="user-view">
                <div>
                  <img
                    className="circle"
                    src="/images/download.jpeg"
                    alt="user"
                  />
                </div>

                <div>
                  <span className="white-text name">Bulbasaur</span>
                </div>

                <div>
                  <span className="white-text email">email@email.com</span>
                </div>
              </div>
            </li>
            <li>
              <NavLink className="waves-effect" to="/">
                <i className="material-icons">send</i>Login
              </NavLink>
            </li>
            <li>
              <NavLink className="waves-effect" exact to="/sign-up">
                <i className="material-icons">content_paste</i>Register
              </NavLink>
            </li>
          </ul>
        </header>
        <main>
          <div className="creatorbody">
            <Route path="/" exact component={SignInForm}></Route>
            <Route path="/sign-up" exact component={SignUpForm}></Route>
          </div>
        </main>
      </Router>
    );
  }
}

export default Login;
