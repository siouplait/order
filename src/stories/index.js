import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'
import { withStorySource } from '@storybook/addon-storysource'
import { withNotes } from '@storybook/addon-notes'

// css
import './stories.css'
import '../index.css'

// components
import Button from '../components-modules/Button'
import Input from '../components-modules/Input'
import InputLogo from '../components-modules/InputLogo'
import Link from '../components-modules/Link'
import Nav from '../components-modules/Nav'
import PageTemplate from '../components-modules/PageTemplate'

// icon/logo
import btnBurger from '../icon/btn_burger.svg'
import btnBack from '../icon/btn_back.svg'
import btnSearch from '../icon/btn_search.svg'
import btnAdding from '../icon/btn_adding.svg'
import btnRemove from '../icon/btn_remove.svg'
import logoMain from '../icon/logo_main.png'
import logoQr from '../icon/logo_qr.png'
import logoNfcn from '../icon/logo_nfcn.png'
import logoSioup from '../icon/logo_sioup.png'

// welcome
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

// BUTTON stories
storiesOf('Button', module)
  .add('Btn principal', withNotes('Simple link use class (s-btn)')(() =>
    <Button className="s-btn" onClick={action('clicked')}>
    Hello Button
    </Button>))
  .addDecorator(withStorySource(`
    <Button className="s-btn" onClick={action('clicked')}>
    Hello Button
    </Button>`
  ))

  .add('Btn facebook', () =>
    <Button className="s-btn s-facebook" onClick={action('clicked')}>
      Facebook Connect
    </Button>)
  .add('Btn black', () =>
    <Button className="s-btn s-black" onClick={action('clicked')}>
      PASSER COMMANDE
    </Button>)
  .add('Btn burger', () =>
    <Button className="s-btn-icon" onClick={action('clicked')}>
      <img src={btnBurger} alt="button burger 50 x 50" height="50px"
        width="50px"/>
    </Button>)
  .add('Btn back', () =>
    <Button className="s-btn-icon" onClick={action('clicked')}>
      <img src={btnBack} alt="button back 60 x 60" height="60px"
        width="60px"/>
    </Button>)
  .add('Btn black share', () =>
    <Button className="s-btn s-black" onClick={action('clicked')}>
      PARTAGER
      <img className="s-icon-symetric" src={btnBack} alt="button share 30 x 30" height="30px"
        width="30px" />
    </Button>)
  .add('Btn search', () =>
    <Button className="s-btn-icon" onClick={action('clicked')}>
      <img src={btnSearch} alt="button search 30 x 30" height="30px"
        width="30px" />
    </Button>)
  .add('Btn adding', () =>
    <Button className="s-btn-icon" onClick={action('clicked')}>
      <img src={btnAdding} alt="button adding 30 x 30" height="30px"
        width="30px" />
    </Button>)
  .add('Btn remove', () =>
    <Button className="s-btn-icon" onClick={action('clicked')}>
      <img src={btnRemove} alt="button remove 30 x 30" height="30px"
        width="30px" />
    </Button>)

// INPUT stories
storiesOf('Input', module)
  .add('Input standard', () =>
    <Input className="s-input" placeholder="Standard input" />)
  .add('Input search', () =>
    <InputLogo className="s-block-input-logo" >
      <Input className="s-input" placeholder="Search input" />
      <Button className="s-btn-icon" onClick={action('clicked')}>
        <img src={btnSearch} alt="button burger 30 x 30" height="30px"
          width="30px" />
      </Button>
    </InputLogo>)

// LINK stories
storiesOf('Link', module)
  .add('link highlighted', () =>
    <Link className="s-link-highlighted">
      Commander sans compte
    </Link>)

// NAVBAR stories
storiesOf('Nav', module)
  .add('Nav menu', () =>
    <Nav className="s-nav-menu">
      <Button className="s-btn-icon" onClick={action('clicked')}>
        <img src={btnBurger} alt="button burger 50 x 50" height="50px"
          width="50px" />
      </Button>
      <Button className="s-btn-icon" onClick={action('clicked')}>
        <img src={btnBack} alt="button back 50 x 50" height="50px"
          width="50px" />
      </Button>
      <h1>Siouplaît!</h1>
    </Nav>)

// PAGE stories
storiesOf('Page', module)
  .add('Page 1', () =>
    <PageTemplate className="s-bg-orange">
      <img src={logoMain} alt="button burger 140 x 140" height="170"
        width="170" />
      <Button style={{ marginBottom: '4em', position: 'fixed', bottom: 0 }} className="s-btn s-black" onClick={action('clicked')}>
        PASSER COMMANDE
      </Button>
    </PageTemplate>
  )
  .add('Page 2', () =>
    <PageTemplate className="s-bg-orange">
      <img style={{ marginBottom: '1em' }} src={logoMain} alt="button burger 140 x 140" height="100"
        width="100" />
      <Button className="s-btn s-facebook" onClick={action('clicked')}>
        Facebook Connect
      </Button>
      <Button style={{ marginTop: '1em' }} className="s-btn" onClick={action('clicked')}>
        Hello Button
      </Button>
      <Link style={{ bottom: 0, position: 'fixed', marginBottom: '1em' }} className="s-link-highlighted">
        Commander sans compte
      </Link>
    </PageTemplate>
  )
  .add('Page 3', () =>
    <PageTemplate className="s-bg-orange">
      <Button style={{ top: 0, left: 0, position: 'fixed', margin: '0.5em' }} className="s-btn-icon" onClick={action('clicked')}>
        <img src={btnBurger} alt="button burger 20 x 20" height="40" width="40" />
      </Button>
      <img style={{ top: 0, position: 'fixed', marginTop: '1em' }} src={logoMain} alt="logo 100 x 100" height="100"
        width="100" />
      <img style={{ marginTop: '4em', marginBottom: '1em' }} src={logoQr} alt="logo QR" height="80" width="90"/>
      <Button className="s-btn" onClick={action('clicked')}>
        Scanner le QR Code
      </Button>
      <img src={logoNfcn} alt="logo QR" height="80" width="90" />
      <Button className="s-btn" onClick={action('clicked')}>
        Androïd : NFC
      </Button>
      <Link className="s-link-highlighted">
        Rechercher un spot
      </Link>
    </PageTemplate>
  )
  .add('Page 4', () =>
    <PageTemplate className="s-bg-orange">
      <Nav style={{ top: 0, position: 'fixed' }} className="s-nav-menu">
        <Button className="s-btn-icon" onClick={action('clicked')}>
          <img src={btnBurger} alt="button burger 50 x 50" height="50px"
            width="50px" />
        </Button>
        <Button className="s-btn-icon" onClick={action('clicked')}>
          <img src={btnBack} alt="button back 50 x 50" height="50px"
            width="50px" />
        </Button>
        <h1>Siouplaît!</h1>
      </Nav>
      <img style={{ marginTop: '7em' }} src={logoNfcn} alt="logo QR" height="80" width="80" />
      <p style={{ padding: '0 3em', textAlign: 'center' }}>Posez votre téléphone sur les jolis ronds connectés, et découvrez directement le menu du spot où vous êtes</p>
      <img style={{ marginTop: '2.5em'}} src={logoMain} alt="logo 100 x 100" height="75"
        width="75" />
      <Button style={{ marginTop: '6em' }} className="s-btn-icon" onClick={action('clicked')}>
        <img src={btnBack} alt="button back 60 x 60" height="60px"
          width="60px" />
      </Button>
    </PageTemplate>
  )
  .add('Logout Page', () =>
    <PageTemplate className="s-bg-orange">
      <h1> #EtMerci! </h1>
      <p> Le "Name of the place" prépare votre commande.
        <br/>Vous recevrez une notification quand celle-ci sera prête.
      </p>
      <img src={logoMain} alt="button burger 140 x 140" height="140"
        width="140" />
      <Button style={{ marginTop: '21em', position: 'fixed'}} className="s-btn s-black" onClick={action('clicked')}>
        PARTAGER <img className="s-icon-symetric" src={btnBack} alt="button share 30 x 30" height="30px"
        width="30px" />
      </Button>
      <img style={{ marginTop: '7em', rotate: '180°'}} src={logoSioup} alt="button burger 140 x 140" />
      <p style={{ marginTop: '2em' }}> MAIS C'EST NOUS QUI VOUS REMERCIONS </p>
    </PageTemplate>
  )

export default Button