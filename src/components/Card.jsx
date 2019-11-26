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
            <span className="card-title">
              {this.props.input1} to {this.props.input2}
            </span>
            <ul>
              <li>
                Origin City Code:{" "}
                <span className="flight-info">{this.props.origin}</span>
              </li>
              <li>
                Destination City Code:{" "}
                <span className="flight-info">{this.props.destination}</span>
              </li>
              <li>
                Departure Date:{" "}
                <span className="flight-info">{this.props.depart_date}</span>
              </li>
              <li>
                Return Date:{" "}
                <span className="flight-info">{this.props.return_date}</span>
              </li>
              <li>
                Number of Transfers:{" "}
                <span className="flight-info">{this.props.transfers}</span>
              </li>
              <li>
                Price: <span className="flight-info">${this.props.value}</span>
              </li>
            </ul>
          </div>
          <div className="card-action">
            <div>Ticket Found At: {this.props.gate}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
