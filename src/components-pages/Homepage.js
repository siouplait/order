import React, { Component } from 'react'
import logo from "../icon/logoo.png"
import button from '../components-modules/Button.js'
import "./Homepage.css"

class Home extends Component {
  render () {
    return (
      <div className="Home">
      <img src={logo} className="App-logo" alt="logo" />
    <br/>
      <button className="s-btn s-black" >
      Passer Commande
      </button>
      </div>
    )
  }
}

export default Home;
