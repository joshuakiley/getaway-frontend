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
    return (
      this.props.location.map(location => {
        return (


          <div className="col s12 m6 l4">
            <div className="cardtwo" key={location._id}>
              <div className="card-content">
                <span className="card-title">{location.location}</span>
                <br />
                <img src={location.img} width="350" height="200"></img>
                <ul className="cardThree">
                  <li>Month: {location.month}</li>
                  <li>Note: {location.notes}</li>
                  <li>Budget: ${location.budget}</li>
                  <li>Sights: {location.sights}</li>
                  <td>
                    <button onClick={() => this.deleteLocation(location._id)}>
                      <i class="tiny material-icons">delete</i>
                    </button>
                  </td>
                  <td>
                    <i class="tiny material-icons">edit</i>
                  </td>

                </ul>
              </div>
              <div className="card-action">

              </div>
            </div>
            <br />
          </div>


        )
      })
    )
  }
}

export default Show;
