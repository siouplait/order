import React from 'react'
import PageTemplate from '../components-modules/PageTemplate'
import Headertext from '../components-modules/Headertext'
import ListOrder from '../components-modules/ListOrder'
import Tip from '../components-modules/Tip'
import TotalOrder from '../components-modules/TotalOrder'
import Button from '../components-modules/Button'


class CommandePage extends React.Component {
  render(){
    return(
      <PageTemplate nav className="s-bg-white">
        <div full className="s-d-flex1">
          <Headertext title="VOTRE COMMANDE" subtitle="JJ.MM.AA  HH:MM" />
        </div>

        <div center>
          <ListOrder
            list={[
              { qte: 2, name: "Burger", price: 8.1, id: 1 },
              { qte: 1, name: "coca", price: 1.5, id: 12 },
              { qte: 1, name: "Salade", price: 4.4, id: 100 },
              { qte: 2, name: "Mousse au chocolat", price: 7.4, id: 8 }
            ]}
          />
          <TotalOrder
            list={[
              { qte: 2, name: "Burger", price: 8.1, id: 1 },
              { qte: 1, name: "coca", price: 1.5, id: 12 },
              { qte: 1, name: "Salade", price: 4.4, id: 100 },
              { qte: 2, name: "Mousse au chocolat", price: 7.4, id: 8 }
            ]}
          />
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
