import React from 'react'
import PageTemplate from '../components-modules/PageTemplate'
import Button from '../components-modules/Button'
import logoMain from '../icon/logo_main.png'
import logoNfcn from '../icon/logo_nfcn.png'
import btnBack from '../icon/btn_back.svg'


class Page4 extends React.Component {
  render(){
    return(
      <PageTemplate nav="s-nav-noback" center className="s-bg-orange">
        <div className="s-mb-16">
          <img
            className="s-mt-"
            src={logoNfcn}
            alt="logo QR"
            style={{ height: "5em" }}
          />
          <p className="s-px-2">
            Posez votre <span className="s-text-bold">téléphone</span> sur les{" "}
            <span className="s-text-bold">jolis ronds connectés</span>, et
            découvrez directement le{" "}
            <span className="s-text-bold">menu du spot où vous êtes</span>
          </p>
          <img
            className="s-landscape-hidden"
            src={logoMain}
            alt="logo"
            style={{ height: "4em" }}
          />
        </div>
        <Button className="s-fixed-b s-mb-5" icon={btnBack} iconHeight="4em" />
      </PageTemplate>

    )
  }
}

export default Page4
