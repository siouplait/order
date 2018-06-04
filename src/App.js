import React, { Component } from 'react'
import './App.css'
import logo from "./icon/logoo.png"
import button from './components-modules/Button.js'
// import Home from "./components-pages/Homepage.js"
import Connect from "./components-pages/Connect.js"

class App extends Component {
  render () {
    return (
      <div className="App">
      < Connect />
      
      </div>
    )
  }
}

export default App
