//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
import axios from "axios";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      restaurant: "",

      img: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const baseURL = this.props.baseURL;
    const response = await axios.post(`${baseURL}/location`, {
      restaurant: this.state.restaurant,
      location: this.state.location,
      img: this.state.img
    });
    this.setState({
      restaurant: "",
      location: "",
      img: ""
    });
    this.props.handleAddlocation(response.data);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="restaurant"></label>

        <input
          type="text"
          id="restaurant"
          name="restaurant"
          onChange={this.handleChange}
          value={this.state.restaurant}
          placeholder="restaurant"
        />
        <label htmlFor="img"></label>
        <input
          type="text"
          id="img"
          name="img"
          onChange={this.handleChange}
          value={this.state.img}
          placeholder="img"
        />

        <label htmlFor="location"></label>
        <input
          type="text"
          id="location"
          name="location"
          onChange={this.handleChange}
          value={this.state.location}
          placeholder="location"
        />
        <input type="submit" value="Add a Location" />
      </form>
    );
  }
}

export default New;
