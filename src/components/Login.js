import React from "react";
// import "../Apptwo.css";
// import "../App.css";
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
}
    from "react-router-dom";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

function Login() {
    return (

        <Router>
            <div className="creatorbody" >
                <div className="App">
                    <div className="App__Aside" refs="stars">
                        <nav className="navbarchange">GetAway</nav>
                    </div>
                    <div className="App__Form">
                        <div className="FormTitle">
                            <NavLink
                                to="/sign-in"
                                className="FormTitle__Link"
                                activeClassName="FormTitle__Link--Active"
                            >
                                <div class="loginpage">Login </div>
                            </NavLink>
                            <br />
                            <NavLink
                                exact
                                to="/"
                                className="FormTitle__Link"
                                activeClassName="FormTitle__Link--Active "
                            >
                                <div class="loginpage"> Register </div>
                            </NavLink>
                        </div>
                        <Route exact path="/" component={SignUpForm}></Route>
                        <Route path="/sign-in" component={SignInForm}></Route>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Login;
