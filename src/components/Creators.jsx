//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

class Creators extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  render() {
    return (
      <div className="creatorsbody">
        <br />
        <div className="createheader">
          <i className="material-icons">keyboard_arrow_left</i>
          Creators <i className="material-icons">keyboard_arrow_right</i>
        </div>
        <div className="col s12 m8 offset-m2 l6 offset-l3"></div>
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s2">
              <img
                className="circle"
                src="/images/joshua.jpeg"
                alt="user"
                width="150"
                height="150"
              />
            </div>
            <div className="col s10">
              <span className="black-text">
                <p>
                  Joshua: Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                  <br />
                  <a href="https://www.twitter.com">
                    <img
                      src="../images/twitter.png"
                      width="30"
                      height="30"
                      alt="Twitter Link"
                    ></img>
                  </a>
                  <a href="https://www.linkedin.com">
                    <img
                      src="../images/link.png"
                      width="30"
                      height="30"
                      alt="Linkedin Link"
                    ></img>
                  </a>
                  <a href="https://www.instagram.com">
                    <img
                      src="../images/insta.png"
                      width="30"
                      height="30"
                      alt="Instagram Link"
                    ></img>
                  </a>
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="col s12 m8 offset-m2 l6 offset-l3"></div>
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s2">
              <img
                className="circle"
                src="/images/steven.jpeg"
                alt="user"
                width="150"
                height="150"
              />
            </div>
            <div className="col s10">
              <span className="black-text">
                <p>
                  Steven: Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                  <br />
                  <a href="https://www.twitter.com">
                    <img
                      src="../images/twitter.png"
                      width="30"
                      height="30"
                      alt="Twitter Link"
                    ></img>
                  </a>
                  <a href="https://www.linkedin.com">
                    <img
                      src="../images/link.png"
                      width="30"
                      height="30"
                      alt="LinkedIn Link"
                    ></img>
                  </a>
                  <a href="https://www.facebook.com">
                    <img
                      src="../images/facebook.png"
                      width="30"
                      height="30"
                      alt="Facebook Link"
                    ></img>
                  </a>
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="col s12 m8 offset-m2 l6 offset-l3"></div>
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s2">
              <img
                className="circle"
                src="/images/michele.jpeg"
                alt="user"
                width="150"
                height="150"
              />
            </div>
            <div className="col s10">
              <span className="black-text">
                <p>
                  Michele has 10+ years of software experience with well-known
                  Corporations and several successful venture backed Tech
                  start-up companies. Certified SCRUM Master utilizing Agile
                  Processes for software release management and program
                  management, has a Certification in Software Quality Assurance
                  thru ISTQB (International Software Testing Quality Board), and
                  is completing his Full-stack developer Certification with an
                  expanded technical toolkit including HTML5, CSS3, JavaScript,
                  Ruby on Rails, RESTful APIs, jQuery, Node.js, React.js, SQL,
                  GitHub and Herok, thru the prestigious General Assembly
                  program.
                  <br />
                  <a href="https://www.twitter.com">
                    <img
                      src="../images/twitter.png"
                      width="30"
                      height="30"
                      alt="Twitter Link"
                    ></img>
                  </a>
                  <a href="https://www.linkedin.com">
                    <img
                      src="../images/link.png"
                      width="30"
                      height="30"
                      alt="LinkedIn Link"
                    ></img>
                  </a>
                  <a href="https://www.facebook.com">
                    <img
                      src="../images/facebook.png"
                      width="30"
                      height="30"
                      alt="Facebook"
                    ></img>
                  </a>
                </p>
              </span>
            </div>
            <br />
          </div>
        </div>
        <br />
        <div className="createheader">
          <i className="material-icons">keyboard_arrow_left</i>
          /Creators <i className="material-icons">keyboard_arrow_right</i>
          <br />
        </div>
      </div>

      /* 
              <h1>Creators</h1>
      
              <div class="#ff5252 red accent-2">
                <div>
                  <br />
                  <img
                    className="circle"
                    src="/images/joshua.jpeg"
                    alt="user"
                    width="150" height="150"
                  />
                </div>
                <h3>Joshua Kiley</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
                <br />
              </div>
      
      
              <div class="#ff5252 red accent-2">
                <div>
                  <br />
                  <img
                    className="circle"
                    src="/images/steven.jpeg"
                    alt="user"
                    width="150" height="150"
                  />
                </div>
                <h3>Steven Wolanin</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
                <br />
              </div>
      
      
              <div class="#ff5252 red accent-2">
                <div>
                  <br />
                  <img
                    className="circle"
                    src="/images/michele.jpeg"
                    alt="user"
                    width="150" height="150"
                  />
                </div>
                <h3>Michele Creanza</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
                <br />
              </div> */

      // </div >
    );
  }
}

export default Creators;
