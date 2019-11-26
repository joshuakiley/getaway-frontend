import React, { Component } from "react";
import axios from "axios";

class EditForm extends Component {
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
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }
  componentDidMount() {
    console.log("Edit Form Mounted");
    this.setState({
      location: this.props.location.title,
      month: this.props.location.month,
      notes: this.props.location.notes,
      budget: this.props.location.budget,
      sights: this.props.location.sights,
      img: this.props.location.img
    });
  }
  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value // what does this do?
    });
  }

  async handleEditSubmit(event) {
    try {
      event.preventDefault();
      console.log("Submitted");
      const locationdID = this.props.location._id;
      const url = `http://localhost:3003/locations/${locationdID}`;
      const payload = {
        location: this.state.location,
        month: this.state.month,
        notes: this.state.notes,
        budget: this.state.budget,
        sights: this.state.sights,
        img: this.state.img
      };
      const updatedLocation = await axios.put(url, payload);
      console.log("PUT: ", updatedLocation);
      this.props.getLocation();
      this.setState({
        location: "",
        month: "",
        notes: "",
        budget: "",
        sights: "",
        img: ""
      });
    } catch (err) {
      console.log("Update Submit Error: ", err);
    }
  }
  render() {
    return (
      <form onSubmit={this.handleEditSubmit}>
        <input
          type="text"
          name="location"
          value={this.state.location}
          onChange={this.handleOnChange}
        />
        <input
          type="text"
          name="month"
          value={this.state.month}
          onChange={this.handleOnChange}
        />
        <input
          type="text"
          name="notes"
          value={this.state.notes}
          onChange={this.handleOnChange}
        />
        <input
          type="text"
          name="budget"
          value={this.state.budget}
          onChange={this.handleOnChange}
        />
        <input
          type="text"
          name="sights"
          value={this.state.sights}
          onChange={this.handleOnChange}
        />
        <input
          type="text"
          name="img"
          value={this.state.img}
          onChange={this.handleOnChange}
        />
        <input type="submit" value="Update Locations" />
      </form>
    );
  }
}

export default EditForm;
