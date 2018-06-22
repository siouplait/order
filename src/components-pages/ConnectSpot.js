import React, { Component } from 'react'
import logoMain from '../icon/logo_main.png'
import logoQr from '../icon/logo_qr.png'
import logoNfcn from '../icon/logo_nfcn.png'
import btnSearch from '../icon/btn_search.svg'
import Button from '../components-modules/Button.js'
import PageTemplate from '../components-modules/PageTemplate'
import LinkTemplate from '../components-modules/LinkTemplate'
import {Link} from 'react-router-dom'


class ConnectSpot extends Component {
  render () {
    return (
      <PageTemplate nav="s-nav-noback s-no-title" className="s-bg-orange">
        <img
          className="s-fixed-t s-mt-1"
          src={logoMain}
          alt="logo"
          style={{ height: '7em' }}
        />
        <div className="s-block-landscape s-mt-5 s-mb-3" >
          <Button position="s-mt-3" text="Scanner le QR Code" logo={logoQr} logoHeight="15" />
          <Link to='/ConnectNfc'><Button text="Androïd : NFC" logo={logoNfcn} logoHeight="15" /></Link>
        </div>
        <LinkTemplate block className="s-fixed-b" text="Rechercher un spot" logo={btnSearch} imgHeight="5" />
      </PageTemplate>
    )
  }
}

export default ConnectSpot
