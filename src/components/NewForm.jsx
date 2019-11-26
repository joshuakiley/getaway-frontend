//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
import axios from "axios";

class NewForm extends Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post(`${this.props.baseURL}/locations`, {
      location: this.state.location,
      img: this.state.img,
      month: this.state.month,
      notes: this.state.notes,
      budget: this.state.budget,
      sights: this.state.sights
    });

    this.setState({
      location: "",
      img: "",
      month: "",
      sights: "",
      budget: "",
      notes: ""
    });
    console.log("location", response.data);
    this.props.handleAddLocation(response.data);
  }

  render() {
    return (
      <div className="boxholder">
        <div className="input_holder">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              {/* <label htmlFor="img"></label> */}
              <input
                type="text"
                id="img"
                name="img"
                onChange={this.handleChange}
                value={this.state.img}
                placeholder="IMG URL *Required*"
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

              <label htmlFor="sights"></label>
              <input
                type="text"
                id="sights"
                name="sights"
                onChange={this.handleChange}
                value={this.state.sights}
                placeholder="sights"
              />

              <label htmlFor="budget"></label>
              <input
                type="text"
                id="budget"
                name="budget"
                onChange={this.handleChange}
                value={this.state.budget}
                placeholder="budget *Required*"
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
                placeholder="location *Required*"
              />
              <br />
              <br />
              <input type="submit" value="+" className="newlocationbutton" />
              <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewForm;
