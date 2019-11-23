//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
import axios from "axios";

class Flights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: []
    };
  }

  componentDidMount() {
    console.log("Flights Mounted");
  }

  async getFlights() {
    const response = await axios(
      "https://api.travelpayouts.com/v2/prices/latest?currency=usd&origin=NYC&destination=BJS&period_type=year&page=1&limit=90&show_to_affiliates=true&sorting=price&trip_class=0&token=b016441b32b41d8ee4e9e3dde7c62fab"
    );
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
