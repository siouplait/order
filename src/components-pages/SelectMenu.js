import React from 'react'
import {actions} from '../reduce/reducer'

import PageTemplate from '../components-modules/PageTemplate'
import Input from '../components-modules/Input'
import Itemblock from '../components-modules/Itemblock'
import Headertext from '../components-modules/Headertext'
import Shoppingcart from '../components-modules/Shoppingcart'

import btnSearch from '../icon/btn_search.svg'

class SelectMenu extends React.Component {
  constructor (props) {
    super(props)
    actions.getInfoPlace(this.props.id)
  }

  convert (e) {
    return e.split(' ')[0]
      .replace(':', 'h')
      .split(':')[0]
  }

  render () {
    return (
      <PageTemplate nav className="s-bg-white">
        <div full="true" className="s-d-flex">
          <Headertext
            title={this.props.place.title}
            subtitle={this.props.place.hours &&
              this.convert(this.props.place.hours.friday_open) + ' à ' +
              this.convert(this.props.place.hours.friday_close)
            }
          />
          <Input
            icon={btnSearch}
            width="17em"
            iconHeight="1.3em"
            placeholder="Search"
          />

          {this.props.place.card && this.props.place.card.products.filter(e => {
            return (
              this.props.category !== 'undefined' ? e._card_category_id === this.props.category : true
            )
          }).map((e, i) => {
            return (
              <Itemblock
                onClick={() => actions.switchItem(e)}
                id={i}
                key={`food-${i}`}
                src={e.custom_image !== null ? e.custom_image : this.props.place.logo.small}
              >
                {e.custom_name} <br/> {`${e.price.toFixed(2)}€`}
              </Itemblock>
            )
          })}
        </div>
        <Shoppingcart full="true" nbrOrder={this.props.order.length} to="/commande-page"/>
      </PageTemplate>
    )
  }
}

export default SelectMenu
