//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
import Card from "./Card.jsx";
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
        <div className="row">
          {this.state.flights.map(flight => {
            return (
              <Card
                origin={flight.origin}
                depart_date={flight.depart_date}
                destination={flight.destination}
                return_date={flight.return_date}
                value={flight.value}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Flights;
