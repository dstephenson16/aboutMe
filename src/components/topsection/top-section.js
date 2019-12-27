import React from 'react';

import TopImage from "../../../static/images/frontpageImg.jpg";

export default function TopSection() {
    return (
      <div 
        className='top-wrapper'
          style={{
            backgroundImage: `url(${TopImage})`
          }}>
          <h1>Damiana Stephenson</h1>

          <div className="headline">
            <h5>Software Developer</h5>
          </div>
      </div>
    )
}