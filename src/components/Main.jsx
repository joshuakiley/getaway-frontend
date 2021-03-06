//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
import Home from "./Home.jsx";
// import NewForm from "./NewForm.jsx";
import Flights from "./Flights.jsx";
import Creators from "./Creators.jsx";

//==============================
//       DEPENDENCIES
//==============================
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "https://getawaygetaway.herokuapp.com";
}

console.log("current base URL:", baseURL);
// import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    console.log("Main Mounted");
  }

  logout() {
    localStorage.removeItem("user");
    // window.location.reload(true);
  }

  render() {
    return (
      <Router>
        <header>
          <nav className="nav">
            <div className="nav-wrapper">
              <div className="brand-logo">GA</div>
              <div
                data-target="slide-out"
                className="sidenav-trigger hide-on-large-only"
              >
                <i className="material-icons">menu</i>
              </div>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link className="waves-effect" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="waves-effect" to="/flights">
                    Flights
                  </Link>
                </li>
                <li>
                  <Link className="waves-effect" to="/creators">
                    Creators
                  </Link>
                </li>
                <li>
                  <button onClick={() => this.logout()}>Logout</button>
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
              <Link className="waves-effect" to="/">
                <i className="material-icons">home</i>Home
              </Link>
            </li>
            <li>
              <div className="divider"></div>
            </li>
            <li>
              <Link className="waves-effect" to="/flights">
                <i className="material-icons">airplanemode_active</i>Flights
              </Link>
            </li>
            <li>
              <Link className="waves-effect" to="/creators">
                <i className="material-icons">code</i>Creators
              </Link>
            </li>
            <button onClick={() => this.logout()}>Logout</button>
          </ul>
        </header>

        <main>
          <Route path="/" exact component={Home} />
          <Route path="/flights" exact component={Flights} />
          <Route path="/creators" exact component={Creators} />
        </main>
      </Router>
    );
  }
}

export default Main;
