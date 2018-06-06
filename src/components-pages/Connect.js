import React, { Component } from 'react'
import logo from '../components-pages/petitlogo.png'
import button from '../components-modules/Button.js'
import './Connect.css'

class Connect extends Component {
  render () {
    return (
      <div class="Home">
        <div class="homeLogo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div class="fbButton">
          <button className="s-btn s-facebook" >
                Facebook Connect
          </button>
        </div>

        <div class="coButton">
          <button className="s-btn">
                S'inscrire
          </button>
        </div>

        <footer>
          <a href=""> Commander sans compte</a>
        </footer>

      </div>
    )
  }
}

export default Connect
