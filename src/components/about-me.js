import React, { Component } from 'react';

import meImage from "../../static/images/selfie.jpg";

export default class AboutMe extends Component {
  render() {
    return (
        <div className="about-me">
          <div className="about-me-text">
            <h2>About Me</h2>
          </div>

          <div className="about-me-wrapper">
            <div className="about-me-img"
                style={{
                    backgroundImage: `url(${meImage})`
                }}
            />

            <div className="about-me-text">
              <p>
                  Growing up I was surrounded by my dad and uncles 
                  working as software developers and database administrators. I use
                  to call them nerds and say that I was never going to 
                  be what they are when I grow up... Here I am, about 8 years
                  later, just now completing the Full-Stack Development certification
                  from Bottega and going on to continue my Development career.

                  <br></br>
              </p>

              <p>
                    At first, I was going to Utah Valley University 
                  taking classes to become a dental hygienist (totally different I know).
                  I got to the science classes and decided that this wasn't for me.
                  Having a 4.0 gpa those two semesters because I loved math, I thought 
                  that maybe I would love to do what my family does which is programming.
                  Thanks to Bottega Tech, I discovered the fun that coding can be by making 
                  changes and seeing the changes immediately. It allows me to be creative and 
                  use my math logic at the same time.

                  <br></br>
              </p>

              <p>
                    When I'm not working on my projects, you can find me hiking, being 
                  outside, going to the gym, or anything that involves my puppy, Lobo.
              </p>
              <p className="fact">Also I love dogs.</p>
            </div>
          </div>
        </div>
    );
  }
}