//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
import axios from "axios";

let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "https://fathomless-sierra-68956.herokuapp.com"; //we need to change this once deployed
}

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      month: "",
      notes: "",
      budget: "",
      sights: "",
      img: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.deleteLocation = this.deleteLocation.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value
    });
  }

  async deleteLocation(id) {
    console.log(id);
    await axios.delete(`${baseURL}/locations/${id}`);
    await this.props.getLocation();
    // const filterLocation = this.state.location.filter(location => {
    //   return location._id !== id;
    // });
    // this.setState({
    //   location: filterLocation
    // });
  }
  render() {
    return this.props.location.map(location => {
      return (
        <div className="middle" key={location._id}>
          <td>
            <button onClick={() => this.deleteLocation(location._id)}>
              Delete
            </button>
          </td>
          <p>{location.location}</p>
          <p>{location.month}</p>
          <p>{location.notes}</p>
          <p>{location.budget}</p>
          <p>{location.sights}</p>
          <p>
            <img src={location.img} width="200" height="200"></img>
          </p>
        </div>
      );
    });
  }
}

export default Show;
