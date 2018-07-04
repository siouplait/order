import React from 'react'
import { actions } from '../reduce/reducer'

import PageTemplate from '../components-modules/PageTemplate'
import Input from '../components-modules/Input'
import Itemblock from '../components-modules/Itemblock'
import Headertext from '../components-modules/Headertext'

import btnSearch from '../icon/btn_search.svg'

class SelectMenu extends React.Component {
  constructor (props) {
    super(props)
    actions.getInfoPlace(this.props.id)
  }

  render () {
    return (
      <PageTemplate nav className="s-bg-white">
        <div full="true" className="s-d-flex1">
          <Headertext
            title={this.props.place.title}
            subtitle={this.props.place.address &&
              this.props.place.address.street_number + ' ' +
              this.props.place.address.street_name + ' ' +
              this.props.place.address.country
            }
          />
          <Input
            icon={btnSearch}
            width="17em"
            iconHeight="1.3em"
            placeholder="Search"
          />
        </div>
        <div full="true" className="s-d-flex">
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
                src={e.custom_image}
              >
                {e.custom_name} <br/> {`${e.price.toFixed(2)}€`}
              </Itemblock>
            )
          })}
        </div>
      </PageTemplate>
    )
  }
}

export default SelectMenu
