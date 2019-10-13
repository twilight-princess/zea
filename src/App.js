import React, { useState, useEffect } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'

import Nav from './Nav/Nav'
import Page from './Page/Page'
import Home from './Page/Home/Home'
import About from './Page/About/About'
import Projects from './Page/Projects/Projects'
import { statement } from '@babel/template'

function App() {

  return (
    <Router>
      <div className="container">
        <BrowserView>
          <div className="top"><Nav /></div>
        </BrowserView>

        <MobileView>
          <div className="bottom"><Nav /></div>
        </MobileView>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
