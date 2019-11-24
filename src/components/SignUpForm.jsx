import React, { Component } from "react";
import { Link } from "react-router-dom";

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
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({ [name]: value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("the form was submitted with the following data:");
    console.log(this.state);
  }
  render() {
    return (
      <div className="bodysignup">
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">
                <br />
                <div className="btn-floating cyan lighten-2">
                  {" "}
                  <i className="material-icons">face</i>
                </div>
                <br />
                <br />
              </label>
              <input
                type="text"
                id="name"
                className="FormField__Input"
                placeholder="Enter Name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="password">
                <div className="btn-floating cyan lighten-2">
                  {" "}
                  <i className="material-icons">https</i>
                </div>
                <br />
                <br />
              </label>
              <input
                type="password"
                id="password"
                className="FormField__Input"
                placeholder="Create Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">
                <div className="btn-floating cyan lighten-2">
                  {" "}
                  <i className="material-icons">mail</i>
                </div>
                <br />
                <br />
              </label>
              <input
                type="email"
                id="email"
                className="FormField__Input"
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

            <div className="FormField">
              <button
                className="FormField__Button mr-20"
                onChange={this.handleSubmit}
              >
                Sign Up
              </button>
              <Link to="/sign-in" className="FormField__Link">
                {/* I'm already a member */}
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
