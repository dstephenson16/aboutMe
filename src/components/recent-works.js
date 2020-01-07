import React, { Component } from 'react';

import WeddingProject from "../../static/images/weddingProject.jpg";

export default class RecentWorks extends Component {
  render() {
    return (
      <div className='recent-projects'>
          <div className="label">
              <h2>RECENT WORKS</h2>
          </div>

          <div className="two-column">
              <div className="work1">
                  <a href="https://rsvptothewedding.herokuapp.com/" className="weddingLink">
                      <img className="image" src={WeddingProject} alt="wedding" />
                      <p class="text">Capston Project</p>
                      <p className="undertext">React, API, HTML, SCSS, CSS, Flask, JavaScript</p>
                  </a>
              </div>
          </div>
      </div>
    );
  }
}