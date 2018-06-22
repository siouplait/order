import React, { Component } from 'react'
import btnSearch from '../icon/btn_search.svg'
import PageTemplate from '../components-modules/PageTemplate'
import ItemBlock from '../components-modules/ItemBlock'
import Nav from '../components-modules/Nav'
import HeaderText from '../components-modules/HeaderText'
import Input from '../components-modules/Input'

class MenuCard extends Component {
  render () {
    return (
      <PageTemplate className="s-bg-white">
        <Nav full className="s-nav-menu" />
        <HeaderText title="NOM DU SITE" subtitle="CATEGORY NAME"/>
        <Input
          icon={btnSearch}
          iconHeight="1.3"
          placeholder="Search"
        />
        <div className="s-mt-1 s-d-flex">
          <ItemBlock src="http://via.placeholder.com/150x150">
            Name item Name item Name item PRIX
          </ItemBlock>
          <ItemBlock src="http://via.placeholder.com/150x150">
            Name item Name item Name item PRIX
          </ItemBlock>
          <ItemBlock src="http://via.placeholder.com/150x150">
            Name item Name item Name item PRIX
          </ItemBlock>
          <ItemBlock src="http://via.placeholder.com/150x150">
            Name item Name item Name item PRIX
          </ItemBlock>
          <ItemBlock src="http://via.placeholder.com/150x150">
            Name item Name item Name item PRIX
          </ItemBlock>
          <ItemBlock src="http://via.placeholder.com/150x150">
            Name item Name item Name item PRIX
          </ItemBlock>
          <ItemBlock src="http://via.placeholder.com/150x150">
            Name item Name item Name item PRIX
          </ItemBlock>
          <ItemBlock src="http://via.placeholder.com/150x150">
            Name item Name item Name item PRIX
          </ItemBlock>
          <ItemBlock src="http://via.placeholder.com/150x150">
            Name item Name item Name item PRIX
          </ItemBlock>
          <ItemBlock src="http://via.placeholder.com/150x150">
            Name item Name item Name item PRIX
          </ItemBlock>
        </div>
      </PageTemplate>
    )
  }
}

export default MenuCard
