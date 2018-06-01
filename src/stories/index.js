import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'
import './stories.css'

import '../css-modules/Button.css'
import Button from '../components-modules/Button'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('button principal', () =>
    <Button className="s-btn" onClick={action('clicked')}>
    Hello Button
    </Button>)
  .add('button facebook', () =>
    <Button className="s-btn s-facebook" onClick={action('clicked')}>
      Facebook Connect
    </Button>)
  .add('button black', () =>
    <Button className="s-btn s-black" onClick={action('clicked')}>
      PASSER COMMANDE
    </Button>)
