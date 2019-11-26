//==============================
//       COMPONENTS
//==============================
import React from "react";
import Main from "./components/Main.jsx";
import Login from "./components/Login.jsx";
import axios from "axios";

//==============================
//       DEPENDENCIES
//==============================
import "./App.css";
import SignUpForm from "./components/SignUpForm.jsx";
const baseURL = "http://localhost:3003";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: false,
      user: "",
      email: "",
      password: "",
      id: "",
      signin: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);
  }
  componentDidMount() {
    console.log("APP MOUNTED");
    if (localStorage.getItem("user") !== null) {
      const setData = localStorage.getItem("user");
      const dataObj = JSON.parse(setData);
      console.log(dataObj);
      this.setState({
        session: dataObj.session,
        user: dataObj.user,
        email: dataObj.email,
        id: dataObj.id
      });
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.get(`${baseURL}/sessions`, {
        params: {
          username: this.state.email,
          password: this.state.password
        }
      });
      this.setState({
        session: true,
        user: response.data.name,
        email: response.data.email,
        id: response.data._id
      });
      localStorage.setItem(
        "user",
        JSON.stringify({
          session: this.state.session,
          user: this.state.user,
          email: this.state.email,
          id: this.state.id
        })
      );
      console.log(response);
    } catch (err) {
      console.log("LOGIN ERROR: ", err.message);
    }
  }

  signUp() {
    this.setState({
      signin: !this.state.signin
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.session ? (
          <Main />
        ) : (
          <div>
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
                      <button
                        onClick={() => this.signUp()}
                        className="btn waves waves-effect"
                      >
                        {this.state.signin ? "Signup" : "Signin"}
                      </button>
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
                  {" "}
                  <button
                    onClick={() => this.signUp()}
                    className="btn waves waves-effect"
                  >
                    {this.state.signin ? "Signup" : "Signin"}
                  </button>
                </li>
              </ul>
            </header>
            {this.state.signin ? (
              <div className="login-body">
                <form className="form" onSubmit={this.handleSubmit}>
                  <div className="form-element">
                    <label htmlFor="email">
                      <i className="material-icons">mail</i>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-input"
                      placeholder="Enter your email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      autoComplete="off"
                    ></input>
                  </div>

                  <div className="form-element">
                    <label htmlFor="password">
                      <i className="material-icons">https</i>
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-input"
                      placeholder="Enter your password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      autoComplete="off"
                    ></input>
                  </div>

                  <button
                    className="btn blue darken-2 waves-effect"
                    type="submit"
                  >
                    Sign In
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <SignUpForm />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
