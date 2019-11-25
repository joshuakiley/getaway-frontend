//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";


class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      month: '',
      notes: '',
      budget: '',
      sights: '',
      img: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value
    })
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
