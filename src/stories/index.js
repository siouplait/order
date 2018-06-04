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
// rename
import App from '../App'

// icon
import btnBurger from '../icon/btn_burger.svg'
import btnBack from '../icon/btn_back.svg'
import btnSearch from '../icon/btn_search.svg'
import btnAdding from '../icon/btn_adding.svg'
import btnRemove from '../icon/btn_remove.svg'

// welcome
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

// PAGE stories
storiesOf('App', module)
  .add('default', () => <App />)

// BUTTON stories
storiesOf('Button', module)
  .add('Btn principal', withNotes('Simple link use class (s-btn)')(() =>
    <Button className="s-btn" onClick={action('clicked')}>
    Hello Button
    </Button>))
  // .addDecorator(withStorySource(`
  //   <Button className="s-btn" onClick={action('clicked')}>
  //   Hello Button
  //   </Button>`
  // ))
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

export default Button
