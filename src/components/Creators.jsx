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
          <i class="material-icons">keyboard_arrow_left
</i>
          Creators <i class="material-icons">keyboard_arrow_right
</i>
        </div>
        <div class="col s12 m8 offset-m2 l6 offset-l3"></div>
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s2">
              <img
                className="circle"
                src="/images/joshua.jpeg"
                alt="user"
                width="150" height="150"
              />
            </div>
            <div class="col s10">
              <span class="black-text">
                <p>Joshua: Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br />
                  <a href="#"><img src="../images/twitter.png" width="30" height="30"></img></a>
                  <a href="#"><img src="../images/link.png" width="30" height="30"></img></a>
                  <a href="#"><img src="../images/insta.png" width="30" height="30"></img></a>
                </p>
              </span>
            </div>
          </div>
        </div>






        <div class="col s12 m8 offset-m2 l6 offset-l3"></div>
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s2">
              <img
                className="circle"
                src="/images/steven.jpeg"
                alt="user"
                width="150" height="150"
              />
            </div>
            <div class="col s10">
              <span class="black-text">
                <p>Steven: Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br />
                  <a href="#"><img src="../images/twitter.png" width="30" height="30"></img></a>
                  <a href="#"><img src="../images/link.png" width="30" height="30"></img></a>
                  <a href="#"><img src="../images/facebook.png" width="30" height="30"></img></a>
                </p>
              </span>
            </div>
          </div>
        </div>






        <div class="col s12 m8 offset-m2 l6 offset-l3"></div>
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s2">
              <img
                className="circle"
                src="/images/michele.jpeg"
                alt="user"
                width="150" height="150"
              />
            </div>
            <div class="col s10">
              <span class="black-text">
                <p>Michele: Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br />
                  <a href="#"><img src="../images/twitter.png" width="30" height="30"></img></a>
                  <a href="#"><img src="../images/link.png" width="30" height="30"></img></a>
                  <a href="#"><img src="../images/facebook.png" width="30" height="30"></img></a>
                </p>
              </span>
            </div>
            <br />

          </div>
        </div>
        <br />
        <div className="createheader">
          <i class="material-icons">keyboard_arrow_left
</i>
          /Creators <i class="material-icons">keyboard_arrow_right
</i><br />
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
