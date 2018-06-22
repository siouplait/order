import React, { Component } from 'react'
import logoMain from '../icon/logo_main.png'
import Button from '../components-modules/Button.js'
import '../components-modules/PageTemplate.css'
import PageTemplate from '../components-modules/PageTemplate'
import {Link} from 'react-router-dom'

class Homepage extends Component {
  render () {
    return (
      <PageTemplate className="s-bg-orange">
        <img
          className="s-mt-3"
          src={logoMain}
          alt="button burger"
          style={{ height: '12em' }}
        />
        <Link to='/Connect'><Button text="PASSER COMMANDE" position="s-mt-3" className="s-black" /></Link>
      </PageTemplate>
    )
  }
}

export default Homepage
