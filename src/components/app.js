import React, { Component } from 'react';

import TopSection from "./topsection/top-section";
import AboutMe from "./about-me";
import Me from "./me";
import Skills from "./skills";
import OtherSkills from "./other-skills";
import RecentWorks from "./recent-works";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <TopSection />
        <AboutMe />
        <Me />
        <Skills />
        <OtherSkills />
        <RecentWorks />
      </div>
    );
  }
}
