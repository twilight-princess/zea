import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux";
import store from "./redux";

import './App.css'

import Nav from './Nav/Nav'
import Home from './Page/Home/Home'
import About from './Page/About/About'
import Projects from './Page/Projects/Projects'

function App() {

  return (
    <Router>
      <Provider store={store} >
        <div className="container">
          <BrowserView viewClassName="top">
            <Nav />
          </BrowserView>

          <MobileView viewClassName="bottom">
            <Nav />
          </MobileView>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Provider>
    </Router>
  )
}

export default App
