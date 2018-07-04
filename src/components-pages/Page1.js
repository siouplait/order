import React from 'react'
import PageTemplate from '../components-modules/PageTemplate'
import Button from '../components-modules/Button'
import logoMain from '../icon/logo_main.png'
import {Link} from '@reach/router'

class Page1 extends React.Component {
  render () {
    return (
      <PageTemplate center className="s-bg-orange">
        <img
          className="s-mb-15"
          src={logoMain}
          alt="button burger"
          style={{height: '15em'}}
        />
        <Link to='/connection'>
          <Button text="PASSER COMMANDE" position="s-mb-4" className="s-black"/>
        </Link>
      </PageTemplate>
    )
  }
}

export default Page1
