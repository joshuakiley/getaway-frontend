//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

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
  }
  handleChange(event) {
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value
    });
  }
  render() {
    return this.props.location.map(location => {
      return (
        <div className="middle" key={location._id}>
          <p>{location.location}</p>
          <p>{location.month}</p>
          <p>{location.notes}</p>
          <p>{location.budget}</p>
          <p>{location.sights}</p>
          <p>{location.img}</p>
        </div>
      );
    });
  }
}

export default Show;
