import React from 'react'
import { actions } from '../reduce/reducer'
// components
import PageTemplate from '../components-modules/PageTemplate'
import Headertext from '../components-modules/Headertext'
import SpotCategory from '../components-modules/SpotCategory'

class MenuCategory extends React.Component {
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
        </div>

        <div full="true" className="s-d-flex">
          <SpotCategory
            to={this.props.food_category.map(e => `/menu/${this.props.id}/${e.id}`)}
            items={this.props.food_category.map(e => e.name)}
            src={this.props.food_category.map(e => e.image)}
          />
        </div>
      </PageTemplate>
    )
  }
}

export default MenuCategory
