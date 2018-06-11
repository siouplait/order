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
import '../class-generic.css'

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
    <Link>Commander sans compte</Link>)
  .add('link highlighted with white block', () =>
    <Link block={true} logo={btnSearch}>
      Commander sans compte
    </Link>)

// NAVBAR stories
storiesOf('Nav', module)
  .add('Nav menu without btn back and title', () =>
    <Nav className="s-nav-menu s-nav-noback s-no-title" />)
  .add('Nav menu without btn back', () =>
    <Nav className="s-nav-menu s-nav-noback"/>)
  .add('Nav menu with btn back', () =>
    <Nav className="s-nav-menu" />)

// PAGE stories
storiesOf('Page', module)
  .add('Page 1', () =>
    <PageTemplate className="s-bg-orange s-justify-content-center">
      <img className="s-mb-3" src={logoMain} alt="button burger 140 x 140" height="170"
        width="170" />
      <Button className="s-btn s-black s-fixed-b s-mb-4" onClick={action('clicked')}>
        PASSER COMMANDE
      </Button>
    </PageTemplate>
  )
  .add('Page 2', () =>
    <PageTemplate className="s-bg-orange">
      <img className="s-mt-4" src={logoMain} alt="button burger 140 x 140" height="100"
        width="100" />
      <Button className="s-btn s-facebook s-mt-1" onClick={action('clicked')}>
        Facebook Connect
      </Button>
      <Button className="s-btn s-mt-1" onClick={action('clicked')}>
        S'inscrire
      </Button>
      <Link className="s-fixed-b s-mb-2">Commander sans<br/> compte</Link>
    </PageTemplate>
  )
  .add('Page 3', () =>
    <PageTemplate className="s-bg-orange">
      <Nav className="s-nav-menu s-nav-noback s-no-title" />
      <img className="s-mt-1" src={logoMain} alt="logo 100 x 100" height="100"
        width="100" />
      <img className="s-mt-1" src={logoQr} alt="logo QR" height="80" width="90"/>
      <Button className="s-btn s-mt-05" onClick={action('clicked')}>
        Scanner le QR Code
      </Button>
      <img className="s-mt-2" src={logoNfcn} alt="logo QR" height="80" width="90" />
      <Button className="s-btn" onClick={action('clicked')}>
        Androïd : NFC
      </Button>
      <Link block logo={btnSearch}>
        Rechercher un spot
      </Link>
    </PageTemplate>
  )
  .add('Page 4', () =>
    <PageTemplate className="s-bg-orange">
      <Nav className="s-nav-menu s-nav-noback"/>
      <div className="s-fixed-b">
        <img className="" src={logoNfcn} alt="logo QR" height="80" width="80" />
        <p className="s-px-2">
          Posez votre <span className="s-bold-light">téléphone</span> sur les <span className="s-bold-light">jolis ronds connectés</span>,
          et découvrez directement le <span className="s-bold-light">menu du spot où vous êtes</span>
        </p>
        <p><img src={logoMain} alt="logo 100 x 100" height="75"
          width="75" /></p>
        <Button className="s-btn-icon s-my-2" onClick={action('clicked')}>
          <img src={btnBack} alt="button back 60 x 60" height="60px"
            width="60px" />
        </Button>
      </div>
    </PageTemplate>
  )
  .add('Logout Page', () =>
    <PageTemplate className="s-bg-orange">
      <h1 className=" merci s-mt-1 s-mb-0"> #EtMerci! </h1>
      <p className="s-mt-0 s-ml-05 s-mr-05"> Le "Name of the place" prépare votre commande.
        <br/>Vous recevrez une notification quand celle-ci sera prête.
      </p>
      <img src={logoMain} alt="button burger 140 x 140" height="140"
        width="140" />
      <Button className="s-btn s-black s-mt-1" onClick={action('clicked')}>
        PARTAGER <img className="s-icon-symetric" src={btnBack} alt="button share 30 x 30" height="30px"
        width="30px" />
      </Button>
      <img style={{ transform: 'rotate(-11deg)'}} src={logoSioup} alt="button burger 140 x 140" className="s-mt-2" height='50' />
      <p className="s-mt-2 s-ml-05 s-mr-05"> MAIS C'EST NOUS QUI VOUS REMERCIONS </p>
    </PageTemplate>
  )

 
export default Button