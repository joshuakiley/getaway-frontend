//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
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
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">New Plan</a>
                </li>
                <li>
                  <a href="#">Ticket Prices</a>
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
                  <span className="white-text email">email</span>
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
              <Link to="/creators">Creators</Link>
            </li>
          </ul>
        </header>
        <main>
          <h1></h1>
          <Route path="/creators" exact component={Creators} />
        </main>
      </Router>
    );
  }
}

export default Main;
