//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
import axios from "axios";
import New from "./New.jsx";

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "your heroku bakend url here";
}

// baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
console.log("current base URL:", baseURL);

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: []
    };
    this.getlocation = this.getlocation.bind(this);
    this.handleAddlocation = this.handleAddlocation.bind(this);
  }
  componentDidMount() {
    this.getlocation();
  }

  async getlocation() {
    const response = await axios(`${baseURL}/location`);
    const data = response.data;
    this.setState({
      location: data
    });
  }

  handleAddlocation(location) {
    const copylocation = [...this.state.location];
    copylocation.unshift(location);
    this.setState({
      location: copylocation
    });
  }

  render() {
    return (
      <div className="container">
        <h1>location</h1>
        <table>
          <tbody>
            {this.state.location.map(location => {
              return (
                <tr key={location._id}>
                  <td> {location.url}</td>
                  <td> {location.user}</td>
                  <td> {location.notes}</td>
                  <td> {location.activities}</td>
                  <td> {location.budget}</td>
                  <td> {location.month}</td>
                  <td> {location.restaurant}</td>

                  <td> {location.img}</td>
                </tr>
              );
            })}
          </tbody>
          <New handleAddlocation={this.handleAddlocation} baseURL={baseURL} />
        </table>
      </div>
    );
  }
}

export default Locations;
