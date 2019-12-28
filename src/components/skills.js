import React, { Component } from 'react';

import Python from "../../static/images/python.png";
import ReactJS from "../../static/images/reactjs.png";
import Javascript from "../../static/images/javascript.png";
import Html from "../../static/images/html.png";
import Scss from "../../static/images/scss.png";
import Css from "../../static/images/css.png";

export default class Skills extends Component {
    render() {
      return (
          <div className="all-skills">
              <div className="skill-text-wrapper">
                  <h2>Skills</h2>
              </div>

              <div clas="skills-wrapper">
                  <div className="skill">
                      <div className="skill-img" style={{ backgroundImage: `url(${Python})`}}></div>
                      <p>Python</p>
                  </div>

                  <div className="skill">
                      <div className="skill-img" style={{ backgroundImage: `url(${ReactJS})`}}></div>
                      <p>React</p>
                  </div>

                  <div className="skill">
                      <div className="skill-img" style={{ backgroundImage: `url(${Javascript})`}}></div>
                      <p>Javascript</p>
                  </div>

                  <div className="skill">
                      <div className="skill-img" style={{ backgroundImage: `url(${Scss})`}}></div>
                      <p>SCSS</p>
                  </div>

                  <div className="skill">
                      <div className="skill-img" style={{ backgroundImage: `url(${Html})`}}></div>
                      <p>HTML5</p>
                  </div>

                  <div className="skill">
                      <div className="skill-img-css" style={{ backgroundImage: `url(${Css})`}}></div>
                      <p>CSS</p>
                  </div>
              </div>
          </div>
      );
    }
  }