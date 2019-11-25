//==============================
//       COMPONENTS  000000
//==============================
// import React, { Component } from "react";
// import axios from "axios";
// import New from "./New.jsx";

// let baseURL = "";

// if (process.env.NODE_ENV === "development") {
//   baseURL = "http://localhost:3003";
// } else {
//   baseURL = "your heroku bakend url here";
// }

// // baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
// console.log("current base URL:", baseURL);

// class Locations extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       holidays: []
//     };
//   }

// this.getlocation = this.getlocation.bind(this);
// this.handleAddlocation = this.handleAddlocation.bind(this);

//   componentDidMount() {
//     this.getlocation();
//   }

//   async getlocation() {
//     const response = await axios(`${baseURL}/location`);
//     const data = response.data;
//     this.setState({
//       location: data
//     });
//   }

//   handleAddlocation(location) {
//     const copylocation = [...this.state.location];
//     copylocation.unshift(location);
//     this.setState({
//       location: copylocation
//     });
//   }

//   render() {
//     return (
//       <div className="container">
//         <h1>location</h1>
//         <div>
//           <div>
//             {this.state.location.map(location => {
//               return (
//                 <div key={location._id}>
//                   {/* <div> {location.url}</div>
//                   <div> {location.user}</div>
//                   <div> {location.notes}</div>
//                   <div> {location.activities}</div>
//                   <div> {location.budget}</div>
//                   <div> {location.month}</div>
//                   <div> {location.restaurant}</div> */}

//                   <div> {location.img}</div>
//                 </div>
//               );
//             })}
//           </div>
//           {/* <New handleAddlocation={this.handleAddlocation} baseURL={baseURL} /> */}
//         </div>
//       </div>
//     );
//   }
// }

//   render() {
//     return (
//       <div className="container">
//         <h1>Holidays! Celebrate!</h1>
//       </div>

//     );
//   }
// }

// export default Locations;
