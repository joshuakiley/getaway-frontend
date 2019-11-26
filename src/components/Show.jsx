//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
import axios from "axios";
import EditForm from "./EditForm.jsx";
import NewForm from "./NewForm.jsx";
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
      // location: "",
      // month: "",
      // notes: "",
      // budget: "",
      // sights: "",
      // img: "",
      editButton: false,
      selectedLocation: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.deleteLocation = this.deleteLocation.bind(this);
    this.handleEditButton = this.handleEditButton.bind(this);
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
  async handleEditButton(clickedLocation) {
    console.log("Clicked Edit Button");
    await this.setState({
      editButton: true,
      selectedLocation: clickedLocation
    });
    console.log("Current Location: ", this.state.selectedLocation);
  }

  render() {
    const { getLocation } = this.props;
    const { editButton, selectedLocation } = this.state;
    const showEditForm = editButton ? (
      <EditForm location={selectedLocation} getLocation={getLocation} />
    ) : (
      <NewForm getLocation={getLocation} />
    );
    return this.props.location.map(location => {
      return (
        <div className="col s12 m6 l4">
          <div className="cardtwo" key={location._id}>
            <div className="card-content">
              <span className="card-title">{location.location}</span>
              <br />
              <img
                src={location.img}
                width="350"
                height="200"
                alt="user uploaded"
              ></img>
              <ul className="cardThree">
                <li>Month: {location.month}</li>
                <li>Note: {location.notes}</li>
                <li>Budget: ${location.budget}</li>
                <li>Sights: {location.sights}</li>
                <td>
                  <button onClick={() => this.deleteLocation(location)}>
                    Delete
                  </button>

                  <button onClick={() => this.handleEditButton(location)}>
                    Edit
                  </button>
                </td>
              </ul>
            </div>
            <div className="card-action"></div>
          </div>

          <br />
          {showEditForm}
        </div>
      );
    });
  }
}

export default Show;
