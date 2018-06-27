import React from 'react'
import PageTemplate from '../components-modules/PageTemplate'
import Input from '../components-modules/Input'
import Headertext from '../components-modules/Headertext'
import SpotCategory from '../components-modules/SpotCategory'
import {Link} from '@reach/router'

import btnSearch from '../icon/btn_search.svg'


class MenuCategory extends React.Component {
  render(){
    return(
      <PageTemplate nav className="s-bg-white">
        <div full className="s-d-flex1">
          <Headertext title="NOM DU SITE" subtitle="ADDRESS & OPENING HOURS" />
          <Input
            className="s-mt-1"
            icon={btnSearch}
            width="17em"
            iconHeight="1.3em"
            placeholder="Search"
          />
        </div>

        <div full className="s-d-flex">
          <Link to="/Menu">
            <SpotCategory
              items={["PETIT DEJ", "APERO", "BOISSONS"]}
              src={[
                "../img/petitdej.png",
                "../img/apero.png",
                "../img/boisson.png"
              ]}
            />
          </Link>
        </div>
      </PageTemplate>
    )
  }
}

export default MenuCategory
