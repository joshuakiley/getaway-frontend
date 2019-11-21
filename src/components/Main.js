//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

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
                  <a href="#">Dev Team</a>
                </li>
              </ul>
            </div>
          </nav>
          <ul></ul>
        </header>
        <main>
          <h1></h1>
          {/* add here */}
        </main>
      </Router>
    );
  }
}

export default Main;
