import React, { Component } from 'react'
import './App.css'
import logo from "./icon/logoo.png"
import button from './components-modules/Button.js'
import Home from "./components-pages/Homepage.js"

class App extends Component {
  render () {
    return (
      <div className="App">
      < Home />

      </div>
    )
  }
}

export default App
