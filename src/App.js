import React, { Component } from 'react'
import './App.css'
import Homepage from './components-pages/Homepage.js'
// import Connect from "./components-pages/Connect.js"

class App extends Component {
  render () {
    return (
      <div className="App">
        <Homepage />
      </div>
    )
  }
}

export default App
