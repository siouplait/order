import React, { Component } from 'react'
import logo from '../icon/logo_main.png'
import button from '../components-modules/Button.js'
import './Homepage.css'

class Homepage extends Component {
  render () {
    return (
      <div className="Home">
        <div className="homeLogo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="homeButton">
          <button className="s-btn s-black" >
            Passer Commande
          </button>
        </div>
      </div>
    )
  }
}

export default Homepage
