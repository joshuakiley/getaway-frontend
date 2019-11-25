//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
import axios from "axios";

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "your heroku bakend url here";
}

// baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
console.log("current base URL:", baseURL);
class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      restaurant: "",
      month: "",
      notes: "",
      activities: "",
      budget: "",
      url: "",
      sights: "",
      user: "",

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
      img: this.state.img,
      month: this.state.month,
      notes: this.state.notes,
      activities: this.state.activities,
      budget: this.state.budget,
      sights: this.state.sights,
      user: this.state.user,
      url: this.state.url
    });
    this.setState({
      restaurant: "",
      location: "",
      img: "",
      month: "",
      url: "",
      user: "",
      sights: "",
      budget: "",
      activities: "",
      notes: ""
    });
    this.props.handleAddlocation(response.data);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="user"></label>

        <input
          type="text"
          id="user"
          name="user"
          onChange={this.handleChange}
          value={this.state.user}
          placeholder="user"
        />
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
        <label htmlFor="month"></label>
        <input
          type="text"
          id="month"
          name="month"
          onChange={this.handleChange}
          value={this.state.month}
          placeholder="month"
        />
        <label htmlFor="activities"></label>
        <input
          type="text"
          id="activities"
          name="activities"
          onChange={this.handleChange}
          value={this.state.activities}
          placeholder="activities"
        />
        <label htmlFor="sights"></label>
        <input
          type="text"
          id="sights"
          name="sights"
          onChange={this.handleChange}
          value={this.state.sights}
          placeholder="sights"
        />
        <label htmlFor="url"></label>
        <input
          type="text"
          id="url"
          name="url"
          onChange={this.handleChange}
          value={this.state.url}
          placeholder="url"
        />
        <label htmlFor="budget"></label>
        <input
          type="Number"
          id="budget"
          name="budget"
          onChange={this.handleChange}
          value={this.state.budget}
          placeholder="budget"
        />

        <label htmlFor="notes"></label>
        <input
          type="text"
          id="notes"
          name="notes"
          onChange={this.handleChange}
          value={this.state.notes}
          placeholder="notes"
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
