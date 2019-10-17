import React from 'react';
import './About.css'
import mePic from './images/ball.jpg'

function About() {
  return (
    <div className="About">
      <div className="images">
        <div className="image-container">
          <img id="about-img" src={mePic} alt="zea evans" />
        </div>
      </div>
      <iframe title="ZeaEvansResume" src="https://docs.google.com/document/d/e/2PACX-1vTBLv4DpTR_hWWhQ5Lpx30TP2_VUqiHk39yT-VmFxmeV5MqTmHSmnXxuqwsVQM6WPLYHe1CPLzZP1Uj/pub?embedded=true&amp;headers=Set-Cookie=HttpOnly|Secure|SameSite=Strict"></iframe>
    </div>
  )
};

export default About;