//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
import Home from "./Home.js";
import New from "./New.js";
import Locations from "./Locations.js";
import Flights from "./Flights.js";
import Creators from "./Creators.js";
import axios from "axios";

import Login from "./Login.js";

//==============================
//       DEPENDENCIES
//==============================
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "your heroku bakend url here";
}

// baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
console.log("current base URL:", baseURL);
// import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  componentDidMount() {
    console.log("Main Mounted");
  }

  render() {
    return (
      <Router>
        <header>
          <nav className="navbarmain">
            <div className="nav-wrapper">
              <div className="brand-logo">

                <img src="../images/logo2.png" width="100" height="90"></img>
                {/* GA */}


              </div>
              <div data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </div>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link className="waves-effect" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="waves-effect" to="/new">
                    New Location
                  </Link>
                </li>
                <li>
                  <Link className="waves-effect" to="/locations">
                    My Locations
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
              <Link className="waves-effect" to="/new">
                <i className="material-icons">add</i>New Location
              </Link>
            </li>
            <li>
              <Link className="waves-effect" to="/locations">
                <i className="material-icons">map</i>My Locations
              </Link>
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
          </ul>
        </header>

        <main>
          <Route path="/" exact component={Home} />
          <Route path="/new" exact component={New} />
          <Route path="/locations" exact component={Locations} />
          <Route path="/flights" exact component={Flights} />
          <Route path="/creators" exact component={Creators} />
        </main>
      </Router>
    );
  }
}

export default Main;
