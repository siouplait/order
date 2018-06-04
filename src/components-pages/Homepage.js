import React, { Component } from 'react'
import logo from "../components-pages/logo.png"
import button from '../components-modules/Button.js'
import "./Homepage.css"

class Home extends Component {
  render () {
    return (
      <div className="Home">
        <div class="homeLogo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      <div class="homeButton">
        <button className="s-btn s-black" >
        Passer Commande
        </button>
        
      </div>
      
      </div>
    )
  }
}

export default Home;
