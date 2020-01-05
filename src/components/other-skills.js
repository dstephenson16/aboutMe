import React, { Component } from 'react';

import Bilangual from "../../static/images/other-skills/bilangual.png";
import Teamwork from "../../static/images/other-skills/teamwork.png";
import GitHub from "../../static/images/other-skills/github.png";
import ActiveListener from "../../static/images/other-skills/activelistening.jpg";
import SocialMedia from "../../static/images/other-skills/socialmedia.png";
import OpenMind from "../../static/images/other-skills/openminded.png";

export default class OtherSkills extends Component {
  render() {
    return (
      <div className='other-skills-wrapper'>
          <div className="other-skill-text">
              <h2>Other Skills</h2>
          </div>

          <div className="interest">
            <div className="other-skill">
                <div className="other-skill-img" style={{ backgroundImage: `url(${Bilangual})`}}></div>
                <p>Spanish</p>
            </div>

            <div className="other-skill">
                <div className="other-skill-img" style={{ backgroundImage: `url(${Teamwork})`}}></div>
                <p>Teamwork</p>
            </div>

            <div className="other-skill">
                <div className="other-skill-img" style={{ backgroundImage: `url(${GitHub})`}}></div>
                <p>Github</p>
            </div>

            <div className="other-skill">
                <div className="other-skill-img" style={{ backgroundImage: `url(${ActiveListener})`}}></div>
                <p>Active Listener</p>
            </div>

            <div className="other-skill">
                <div className="other-skill-img" style={{ backgroundImage: `url(${SocialMedia})`}}></div>
                <p>Social Media</p>
            </div>

            <div className="other-skill">
                <div className="other-skill-img" style={{ backgroundImage: `url(${OpenMind})`}}></div>
                <p>Open Minded</p>
            </div>
        </div>
      </div>
    );
  }
}