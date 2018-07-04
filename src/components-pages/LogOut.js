import React from 'react'
import PageTemplate from '../components-modules/PageTemplate'
import Button from '../components-modules/Button'

import logoMain from '../icon/logo_main.png'
import btnBack from '../icon/btn_back.svg'
import logoTitle from '../icon/logo_title.png'

class LogOut extends React.Component {
  render () {
    return (
      <PageTemplate center className="s-bg-orange">
        <div className="s-fixed-t">
          <h1 className=""> #EtMerci! </h1>
          <p className="">
            Le "Name of the place" prépare votre commande.
            <br />Vous recevrez une notification quand celle-ci sera prête.
          </p>
        </div>
        <img
          className="s-mt-20"
          src={logoMain}
          alt="logo main"
          style={{ height: '25vh' }}
        />
        <Button
          position="s-mt-5"
          text="PARTAGER"
          icon={btnBack}
          iconHeight="2.5em"
          classIcon="s-icon-symetric"
          className="s-black"
        />
        <img
          className="s-landscape-hidden s-mt-5"
          style={{ transform: 'rotate(-11deg)' }}
          src={logoTitle}
          alt="logo title"
        />
        <p className="s-mt-4"> MAIS C'EST NOUS QUI VOUS REMERCIONS </p>
      </PageTemplate>
    )
  }
}

export default LogOut
