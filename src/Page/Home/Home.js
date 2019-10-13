import React from 'react';
import { Link } from "react-router-dom"
import logo from './circle.png';
import './Home.css'

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <p className="my-name">Zea Evans</p>
        <img src={logo} className="Home-logo" alt="logo" />
        <p>JavaScript Software Engineer</p>
        <Link className="Home-link" to="/projects">Projects</Link>
      </header>
    </div>
  )
};

export default Home;