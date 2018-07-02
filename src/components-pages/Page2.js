import React from 'react'
import PageTemplate from '../components-modules/PageTemplate'
import Button from '../components-modules/Button'
import logoMain from '../icon/logo_main.png'
import LinkTemplate from '../components-modules/LinkTemplate'

class Page2 extends React.Component {
  render () {
    return (
      <PageTemplate className="s-bg-orange">
        <div className="s-mt-12">
          <img src={logoMain} alt="logo principal" style={{height: "10em"}}/>
          <div className="s-block-landscape s-mt-4">
            <Button text="Facebook Connect" className="s-facebook"/>
            <Button text="S'inscrire" position="s-mt-3"/>
          </div>
        </div>
        <LinkTemplate to='/ConnectSpot' className="s-fixed-b s-mb-3">
          Commander sans<br/>compte
        </LinkTemplate>
      </PageTemplate>
    )
  }
}

export default Page2
