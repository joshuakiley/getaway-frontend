import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
const baseURL = "http://localhost:3003";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("Sign In Form Mounted");
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({ [name]: value });
  }
  // handleSubmit(e) {
  //   e.preventDefault();
  //   const response = await Axios.post(`${baseURL}/users`)
  // }
  render() {
    return (
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
            ></input>
          </div>

          <button className="btn blue darken-2 waves-effect" type="submit">
            Sign In
          </button>
          {/* <Link to="/" className="FormField__Link">
            Create an account
          </Link> */}
        </form>
      </div>
    );
  }
}

export default SignInForm;
