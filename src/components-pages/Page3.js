import React from 'react'
import PageTemplate from '../components-modules/PageTemplate'
import Button from '../components-modules/Button'
import LinkTemplate from "../components-modules/LinkTemplate"
import {Link} from '@reach/router'

import logoMain from '../icon/logo_main.png'
import logoQr from '../icon/logo_qr.png'
import logoNfcn from '../icon/logo_nfcn.png'
import btnSearch from '../icon/btn_search.svg'

class Page3 extends React.Component {
  render() {
    return (
      <PageTemplate nav="s-nav-noback s-no-title" center className="s-bg-orange">
        <img
          className="s-fixed-t s-mt-2"
          src={logoMain}
          alt="logo"
          style={{height: "7em"}}
        />
        <div className="s-block-landscape s-mb-4">
          <Button
            position="s-mt-3"
            text="Scanner le QR Code"
            logo={logoQr}
            logoHeight="5em"
          />
          <Link to='/ConnectNfc'>
            <Button
              position="s-mt-3"
              text="Androïd : NFC"
              logo={logoNfcn}
              logoHeight="5em"
            />
          </Link>
        </div>
        <LinkTemplate
          block
          className="s-fixed-b"
          text="Chercher un autre spot"
          logo={btnSearch}
          imgHeight="2em"
        />
      </PageTemplate>
    )
  }
}

export default Page3
