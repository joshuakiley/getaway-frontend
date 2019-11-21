//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

//==============================
//       DEPENDENCIES
//==============================
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
      <div>
        <header>
          <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="">

                </ul>
            </div>
          </nav>
          <ul id="slide-out" className="sidenav">
            <li>
              <div className="user-view"></div>
              <div className="logo center"></div>
              <div className="brand-logo"></div>
              <a href="#name">
                <span className="white-text name">USER</span>
              </a>
              <a href="#budget">
                <span>later add total</span>
              </a>
            </li>
            <li>
              <a>
                <i className="material-icons">home</i> HOME
              </a>
            </li>
            <li>
              <ul className="collapsible collapsible-accordian">
                <li>
                  <a
                    href="#"
                    className="collapsible-header waves-effect waves-red"
                  >
                    PAY PERIODS
                  </a>
                  <div className="collapsible-body">
                    <ul>
                      <li>
                        <a href="/payperiods/new">
                          <i className="material-icons">create_new_folder</i>NEW
                          PAY PERIOD
                        </a>
                      </li>

                      <li>
                        <a href="/payperiod">
                          <i className="material-icons">folder</i>date
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Main;
