import React, { Component } from 'react'
import logoMain from '../icon/logo_main.png'
import Button from '../components-modules/Button.js'
import PageTemplate from '../components-modules/PageTemplate'
import LinkTemplate from '../components-modules/LinkTemplate'
import {Link} from 'react-router-dom'

class Connect extends Component {
  render () {
    return (
      <PageTemplate className="s-bg-orange">
        <img
          className="s-mb-3 s-mt-2"
          src={logoMain}
          alt="logo principal"
          style={{ height: 8 + 'em' }}
        />
        <div className="s-block-landscape s-mb-4">
          <Button text="Facebook Connect" position="s-mb-2" className="s-facebook" />
          <Button text="S'inscrire" position="" />
        </div>
        <Link to='/ConnectSpot'><LinkTemplate className="s-fixed-b s-mb-1">
          Commander sans<br/> compte
        </LinkTemplate></Link>
      </PageTemplate>
    )
  }
}

export default Connect
