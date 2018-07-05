import React from 'react'
import PageTemplate from '../components-modules/PageTemplate'
import Headertext from '../components-modules/Headertext'
import ListOrder from '../components-modules/ListOrder'
import Tip from '../components-modules/Tip'
import TotalOrder from '../components-modules/TotalOrder'
import Button from '../components-modules/Button'

class CommandePage extends React.Component {
  render () {
    return (
      <PageTemplate nav className="s-bg-white">
        <div full="true" className="s-d-flex1">
          <Headertext title="VOTRE COMMANDE" subtitle="JJ.MM.AA  HH:MM" />
        </div>
        <p>hahaha</p>
        <div center="true">
          <ListOrder list={this.props.order} />
          <TotalOrder list={this.props.order} />
          <Tip />
          <div className="s-pb-7">
            <Button text="PAYER" className="s-black" />
          </div>
        </div>
      </PageTemplate>
    )
  }
}

export default CommandePage
