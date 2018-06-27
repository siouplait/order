import React from 'react'
import PageTemplate from '../components-modules/PageTemplate'
import Input from '../components-modules/Input'
import Itemblock from '../components-modules/Itemblock'
import Headertext from '../components-modules/Headertext'

import btnSearch from '../icon/btn_search.svg'
import logoChicken from '../img/LogoPoulet.png'

class SelectMenu extends React.Component {
  render(){
    return(
      <PageTemplate nav className="s-bg-white">
        <div full className="s-d-flex1">
          <Headertext title="NOM DU SITE" subtitle="CATEGORY NAME" />
          <Input
            icon={btnSearch}
            width="17em"
            iconHeight="1.3em"
            placeholder="Search"
          />
        </div>

        <div full className="s-d-flex">
          <Itemblock src={logoChicken}>
            Name item Name item Name item PRIX
          </Itemblock>
          <Itemblock src={logoChicken}>
            Name item Name item Name item PRIX
          </Itemblock>
          <Itemblock src={logoChicken}>
            Name item Name item Name item PRIX
          </Itemblock>
          <Itemblock src={logoChicken}>
            Name item Name item Name item PRIX
          </Itemblock>
          <Itemblock src={logoChicken}>
            Name item Name item Name item PRIX
          </Itemblock>
          <Itemblock src={logoChicken}>
            Name item Name item Name item PRIX
          </Itemblock>
          <Itemblock src={logoChicken}>
            Name item Name item Name item PRIX
          </Itemblock>
          <Itemblock src={logoChicken}>
            Name item Name item Name item PRIX
          </Itemblock>
          <Itemblock src={logoChicken}>
            Name item Name item Name item PRIX
          </Itemblock>
        </div>
      </PageTemplate>
    )
  }
}

export default SelectMenu
