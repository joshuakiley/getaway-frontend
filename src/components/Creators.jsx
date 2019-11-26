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
        <div className="card-panel-create">
          <div className="row valign-wrapper">
            <div className="col s2">
              <img
                className="circle"
                src="/images/joshua.jpeg"
                alt="user"
                width="150"
                height="150"
              />
              Joshua K
            </div>
            <div className="col s10">
              <span className="black-text">
                <p className="creatortext">
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
                  <br /></p>
                <p className="creatoricon">
                  <a href="https://github.com/joshuakiley"
                    target="blank">
                    <img
                      src="../images/git.png"
                      width="30"
                      height="30"
                      alt="github Link"
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
                  {/* <a href="https://www.instagram.com">
                    <img
                      src="../images/insta.png"
                      width="30"
                      height="30"
                      alt="Instagram Link"
                    ></img>
                  </a> */}
                </p>
              </span>
            </div>
          </div>
        </div>


        <div className="col s12 m8 offset-m2 l6 offset-l3"></div>
        <div className="card-panel-create">
          <div className="card-panel-create">

            <div className="row valign-wrapper">
              <div className="col s2">
                <img
                  className="circle"
                  src="/images/steven.jpeg"
                  alt="user"
                  width="150"
                  height="150"
                />
                Steven W
              </div>
              <div className="col s10">
                <span className="black-text">
                  <p className="creatortext">
                    Hello, I am steven and I am a full stack developer. With a background in art and experience as an admin coordinator I like to create beautiful intuitive designs while having the users experience in mind is what sets me apart. While using an array of tools, as HTML 5, JavaScript, CSS, jQuery, RESTful APIs, and more. I am aways learning, always curious, always coding.</p>
                  <br />
                  <p className="creatoricon">
                    <a href="https://www.github.com/stetomcon" target="blank">
                      <img
                        src="../images/git.png"
                        width="30"
                        height="30"
                        alt="github Link"
                      ></img>
                    </a>


                    <a href="https://www.linkedin.com/in/stevenwolanin/" target="blank">
                      <img
                        src="../images/link.png"
                        width="30"
                        height="30"
                        alt="LinkedIn Link"
                      ></img>
                    </a>
                    {/* <a href="https://www.facebook.com">
                    <img
                      src="../images/facebook.png"
                      width="30"
                      height="30"
                      alt="Facebook Link"
                    ></img>
                  </a> */}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m8 offset-m2 l6 offset-l3"></div>
        <div className="card-panel-create">
          <div className="row valign-wrapper">
            <div className="col s2">
              <img
                className="circle"
                src="/images/michele.jpeg"
                alt="user"
                width="150"
                height="150"
              />
              Michele C
            </div>
            <div className="col s10">
              <span className="black-text">
                <p className="creatortext">
                  Michele has 10+ years of software experience with well-known Corporations and several successful venture backed Tech start-up companies. Certified SCRUM Master utilizing Agile Processes for software release management and program management, has a Certification in Software Quality Assurance thru ISTQB (International Software Testing Quality Board), and is completing his Full-stack developer Certification with an expanded technical toolkit including HTML5, CSS3, JavaScript, Ruby on Rails, RESTful APIs, jQuery, Node.js, ReMichele has 10+ years of software experience with well-known Corporations and several successful venture backed Tech start-up companies. Certified SCRUM Master utilizing Agile Processes for software release management and program management, has a Certification in Software Quality Assurance thru ISTQB (International Software Testing Quality Board), and is completing his Full-stack developer Certification with an expanded technical toolkit including HTML5, CSS3, JavaScript, Ruby on Rails, RESTful APIs, jQuery, Node.js, React.js, SQL, GitHub and Heroku, thru the prestigious General Assemblyact.js, SQL, GitHub and Herok, thru the prestigious General Assembly
                  </p>
                <p className="creatoricon">
                  <br />
                  <a href="https://github.com/michelecreanza" target="blank">
                    <img
                      src="../images/git.png"
                      width="30"
                      height="30"
                      alt="github Link"
                    ></img>
                  </a>


                  <a href="https://www.linkedin.com/in/michele-creanza/" target="_blank">
                    <img
                      src="../images/link.png"
                      width="30"
                      height="30"
                      alt="LinkedIn Link"
                    ></img>
                  </a>
                  {/* <a href="https://www.facebook.com">
                    <img
                      src="../images/facebook.png"
                      width="30"
                      height="30"
                      alt="Facebook"
                    ></img>
                  </a> */}
                </p>
              </span>
            </div>
            <br />
          </div>
        </div>
        <br />
        {/* <div className="createheader">
          <i className="material-icons">keyboard_arrow_left</i>
          /Creators <i className="material-icons">keyboard_arrow_right</i>
          <br />
          <br />
        </div> */}
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
