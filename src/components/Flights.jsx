//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
import axios from "axios";
const baseURL = "http://localhost:3003";

class Flights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: []
    };
    this.getFlights = this.getFlights.bind(this);
  }

  componentDidMount() {
    this.getFlights();
    console.log("FLIGHTS MOUNTED");
  }

  async getFlights() {
    try {
      const response = await axios.get(`${baseURL}/flights`);
      console.log("GET FLIGHTS OK");
      const flights = response.data;
      this.setState({
        flights: flights
      });
      console.log("setState FLIGHTS OK");
    } catch (err) {
      console.log("GET FLIGHTS ERROR: ", err.message);
    }
  }

  render() {
    return (
      <div>
        <h1>flights page</h1>
      </div>
    );
  }
}

export default Flights;
