//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
import Home from "./Home.js";
import New from "./New.js";
import Locations from "./Locations.js";
import Flights from "./Flights.js";
import Creators from "./Creators.js";

//==============================
//       DEPENDENCIES
//==============================
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                Logo
              </a>
              <a href="#" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/new"><i class="material-icons">add</i></Link>
                </li>
                <li>
                  <Link to="/locations">Locations</Link>
                </li>
                <li>
                  <Link to="/flights"><i class="material-icons">airplanemode_active</i></Link>
                </li>
                <li>
                  <Link to="/creators">Creators</Link>
                </li>
              </ul>
            </div>
          </nav>
          <ul id="slide-out" className="sidenav">
            <li>
              <div className="user-view">
                <a href="#">
                  <img className="circle" src="/images/download.jpeg" />
                </a>

                <a href="#">
                  <span className="white-text name">Bulbasaur</span>
                </a>

                <a href="#">
                  <span className="white-text email">email@email.com</span>
                </a>
              </div>
            </li>
            <li>
              <a href="#" className="waves-effect">
                <i className="material-icons">home</i>Home
              </a>
            </li>
            <li>
              <div className="divider"></div>
            </li>
            <li>
              <Link to="/new">
                <i className="material-icons">add</i>New Location
              </Link>
            </li>
            <li>
              <Link to="/locations">
                <i className="material-icons">map</i>Locations
              </Link>
            </li>
            <li>
              <Link to="/flights">
                <i className="material-icons">airplanemode_active</i>Flights
              </Link>
            </li>
            <li>
              <Link to="/creators">
                <i className="material-icons">code</i>Creators
              </Link>
            </li>
          </ul>
        </header>
        <main>
          <h1></h1>
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
