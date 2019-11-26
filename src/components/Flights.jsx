//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
import Card from "./Card.jsx";
import axios from "axios";
const baseURL = "https://getawaygetaway.herokuapp.com";

class Flights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
      origin: "",
      destination: "",
      day: "",
      month: "",
      year: "",
      found: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("FLIGHTS MOUNTED");
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.get(`${baseURL}/flights`, {
        params: {
          origin: this.state.origin,
          destination: this.state.destination,
          day: this.state.day,
          month: this.state.month,
          year: this.state.year
        }
      });
      console.log("GET FLIGHTS OK");
      const flights = response.data;
      this.setState({
        flights: flights,
        found: true
      });
      console.log("setState FLIGHTS OK");
    } catch (err) {
      console.log("GET FLIGHTS ERROR: ", err.message);
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form className="form row" onSubmit={this.handleSubmit}>
          <input
            className="form-input flight-input col s5 m5 l5"
            type="text"
            name="origin"
            id="origin"
            placeholder="City of Origin"
            autoComplete="off"
            value={this.state.origin}
            onChange={this.handleChange}
          />
          <div className="col s2 m2 l2"></div>
          <input
            className="form-input flight-input col s5 m5 l5"
            type="text"
            name="destination"
            id="destination"
            placeholder="Destination City"
            autoComplete="off"
            value={this.state.destination}
            onChange={this.handleChange}
          />
          <input
            className="form-input flight-input col s3 m3 l3"
            type="text"
            name="day"
            id="day"
            placeholder="DD"
            autoComplete="off"
            value={this.state.day}
            onChange={this.handleChange}
          />
          <div className="col s1 m1 l1"></div>
          <input
            className="form-input flight-input col s3 m3 l3"
            type="text"
            name="month"
            id="month"
            placeholder="MM"
            autoComplete="off"
            value={this.state.month}
            onChange={this.handleChange}
          />
          <div className="col s1 m1 l1"></div>
          <input
            className="form-input flight-input col s3 m3 l3"
            type="text"
            name="year"
            id="year"
            placeholder="YYYY"
            autoComplete="off"
            value={this.state.year}
            onChange={this.handleChange}
          />
          <input className="btn" type="submit" value="SEARCH" />
        </form>
        <div className="row">
          {this.state.found ? (
            this.state.flights.map(flight => {
              return (
                <Card
                  key={flight.found_at}
                  input1={this.state.origin}
                  input2={this.state.destination}
                  origin={flight.origin}
                  depart_date={flight.depart_date}
                  destination={flight.destination}
                  return_date={flight.return_date}
                  transfers={flight.number_of_changes}
                  value={flight.value}
                  gate={flight.gate}
                />
              );
            })
          ) : (
              <Card
                input1={this.state.origin}
                input2={this.state.destination}
                gate="NOT FOUND"
              />
            )}
        </div>
      </div>
    );
  }
}

export default Flights;
