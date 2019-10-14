import React from 'react';
import './About.css'
import mePic from './images/pride.png'

function About() {
  return (
    <div className="About">
      <div className="images">
        <img src={mePic} alt="zea evans" />
      </div>
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vTBLv4DpTR_hWWhQ5Lpx30TP2_VUqiHk39yT-VmFxmeV5MqTmHSmnXxuqwsVQM6WPLYHe1CPLzZP1Uj/pub?embedded=true"></iframe>
    </div>
  )
};

export default About;