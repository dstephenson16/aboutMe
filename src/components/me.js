import React, { Component } from 'react';

import Organize from "../../static/images/organizer.png";
import Communicate from "../../static/images/communicator.png";
import Learner from "../../static/images/quicklearner.png";

export default class Me extends Component {
    render() {
      return (
        <div className='me-wrapper'>
            <div className="logo">
                <div className="me-img" style={{ backgroundImage: `url(${Organize})`}}></div>
                <h2>Organizer</h2>
            </div>

            <div className="logo">
                <div className="me-img-communicate" style={{ backgroundImage: `url(${Communicate})`}}></div>
                <h2>Communicator</h2>
            </div>

            <div className="logo">
                <div className="me-img-learner" style={{ backgroundImage: `url(${Learner})`}}></div>
                <h2>Quick Learner</h2>
            </div>
        </div>
      );
    }
  }
  