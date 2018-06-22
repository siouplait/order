import React, { Component } from 'react'
import logoMain from '../icon/logo_main.png'
import logoNfcn from '../icon/logo_nfcn.png'
import btnBack from '../icon/btn_back.svg'
import Button from '../components-modules/Button.js'
import PageTemplate from '../components-modules/PageTemplate'
import {Link} from 'react-router-dom'

class Page4_nfc extends Component {
  render () {
    return (
      <PageTemplate nav className="s-bg-orange">
        <img
          className="s-mt-3"
          src={logoNfcn}
          alt="logo QR"
          style={{ height: '5em' }}
        />
        <p className="s-px-2">
          Posez votre <span className="s-text-bold">téléphone</span> sur les <span className="s-text-bold">jolis ronds connectés</span>,
          et découvrez directement le <span className="s-text-bold">menu du spot où vous êtes</span>
        </p>
        <div className="s-block-landscape s-mt-3">
          <img
            src={logoMain}
            alt="logo"
            style={{ height: '4em' }}
          />
          <Link to='/ConnectSpot'><Button icon={btnBack} iconHeight="4" /></Link>
        </div>
      </PageTemplate>
    )
  }
}

export default Page4_nfc
