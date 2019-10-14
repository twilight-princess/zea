import React from 'react';
import logo from './landing.png';
import me from './circle.png';
import './Home.css'
import Description from './Description'
import Skills from './Skills'

function Home() {
  return (
    <div className="Home">
      <img src={logo} className="Home-logo" alt="logo" />
      <img src={me} className="zea-img" alt="Zea Evans" />
      <Description />
      <Skills />
    </div>
  )
};

export default Home;