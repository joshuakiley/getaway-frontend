//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: ""
    };
  }

  render() {
    return (
      <div className="col s12 m6 l4">
        <div className="card">
          <div className="card-content">
            <span className="card-title">title</span>
            <ul>
              <li>{this.props.origin}</li>
              <li>{this.props.depart_date}</li>
              <li>{this.props.destination}</li>
              <li>{this.props.return_date}</li>
              <li>number of changes/transfers</li>
              <li>${this.props.value}</li>
            </ul>
          </div>
          <div className="card-action">
            <a href="#">link to gate</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
