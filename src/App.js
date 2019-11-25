//==============================
//       COMPONENTS
//==============================
import React from "react";
import Main from "./components/Main.jsx";
import Login from "./components/Login.jsx";
//==============================
//       DEPENDENCIES
//==============================
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: false
    };
  }
  render() {
    return (
      <div className="App">{this.state.session ? <Main /> : <Login />}</div>
    );
  }
}

export default App;
