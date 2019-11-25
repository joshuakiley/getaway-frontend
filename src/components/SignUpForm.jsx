import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const baseURL = "http://localhost:3003";

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
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({ [name]: value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post(`${baseURL}/users`, {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    });
  }

  render() {
    return (
      <div className="login-body">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">
              <div className="btn-floating btn-large cyan lighten-2">
                <i className="material-icons">face</i>
              </div>
            </label>

            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </div>

          <div>
            <label htmlFor="password">
              <div className="btn-floating btn-large cyan lighten-2">
                <i className="material-icons">https</i>
              </div>
            </label>

            <input
              type="password"
              id="password"
              placeholder="Create Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
          </div>

          <div>
            <label htmlFor="email">
              <div className="btn-floating btn-large cyan lighten-2">
                <i className="material-icons">mail</i>
              </div>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
          </div>

          {/* <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input
                                className="FormField__Checkbox"
                                type="checkbox"
                                name="hasAgreed"
                                value={this.state.hasAgreed}
                                onChange={this.handleChange}
                            />
                            I agree all statements in
              <a
                                href=""
                                classname="Formfield__TermsLink"
                                style={{ color: "white", padding: "5px" }}
                            >
                                terms of service
              </a>
                        </label>
                    </div> */}

          <div>
            <button className="btn waves-effect blue lighten-2" type="submit">
              Sign Up
            </button>
            {/* <Link to="/sign-up" className="FormField__Link">
              I'm already a member
            </Link> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
