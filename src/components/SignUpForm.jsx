import React, { Component } from "react";
import axios from "axios";
const baseURL = "https://getawaygetaway.herokuapp.com";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("Sign up Form Mounted");
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
      const response = await axios.post(`${baseURL}/users`, {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      });
      this.setState({
        name: "",
        email: "",
        password: ""
      });
      console.log("CREATE USER SUCCESS");
    } catch (err) {
      console.log("CREATE USER ERROR: ", err.message);
    }
  }

  render() {
    return (
      <div className="login-body">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-element">
            <label htmlFor="name">
              <i className="material-icons">face</i>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              name="name"
              value={this.state.name}
              className="form-input"
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
              placeholder="Create Password"
              name="password"
              className="form-input"
              value={this.state.password}
              onChange={this.handleChange}
              autoComplete="off"
            ></input>
          </div>

          <div className="form-element">
            <label htmlFor="email">
              <i className="material-icons">mail</i>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              name="email"
              className="form-input"
              value={this.state.email}
              onChange={this.handleChange}
              autoComplete="off"
            ></input>
          </div>

          <div>
            <button className="btn waves-effect blue darken-2" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
