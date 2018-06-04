import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'

// css
import './stories.css'
import '../css-modules/Button.css'
import '../css-modules/Input.css'

// components
import Button from '../components-modules/Button'
import Input from '../components-modules/Input'
import InputLogo from '../components-modules/InputLogo'

// icon
import btnBurger from '../icon/btn_burger.svg'
import btnBack from '../icon/btn_back.svg'
import iconSearch from '../icon/icon_search.svg'
import iconAdding from '../icon/btn_adding.svg'
import iconRemove from '../icon/btn_remove.svg'

// welcome
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

// BUTTON stories
storiesOf('Button', module)
  .add('Btn principal', () =>
    <Button className="s-btn" onClick={action('clicked')}>
    Hello Button
    </Button>)
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
      <img src={btnBack} alt="button burger 60 x 60" height="60px"
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
      <img src={iconSearch} alt="button search 30 x 30" height="30px"
        width="30px" />
    </Button>)
  .add('Btn adding', () =>
    <Button className="s-btn-icon" onClick={action('clicked')}>
      <img src={iconAdding} alt="button adding 30 x 30" height="30px"
        width="30px" />
    </Button>)
  .add('Btn remove', () =>
    <Button className="s-btn-icon" onClick={action('clicked')}>
      <img src={iconRemove} alt="button remove 30 x 30" height="30px"
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
        <img src={iconSearch} alt="button burger 30 x 30" height="30px"
          width="30px" />
      </Button>
    </InputLogo>)
