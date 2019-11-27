import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <header>
        <nav className="nav">
          <div className="center brand-logo">GetAway</div>
          <div className="nav-wrapper">
            <div
              data-target="slide-out"
              className="sidenav-trigger hide-on-large-only"
            >
              <i className="material-icons">menu</i>
            </div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <div onClick={() => this.signUp} className="waves waves-effect">
                  {this.state.signin ? "Signin" : "Signup"}
                </div>
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
          <li>{this.state.signin ? "Signin" : "Signup"}</li>
        </ul>
      </header>
    );
  }
}

export default Login;
