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
  render() {
    return (
      <div className="App">
        <Login />
        <Main />
      </div>
    );
  }
}

export default App;
