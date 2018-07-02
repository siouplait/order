import React from 'react'
// components
import PageTemplate from '../components-modules/PageTemplate'
import Input from '../components-modules/Input'
import Headertext from '../components-modules/Headertext'
import SpotCategory from '../components-modules/SpotCategory'
// icon
import btnSearch from '../icon/btn_search.svg'

const MenuCategory = () =>
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
      <SpotCategory
        to={['/', '/', '/']}
        items={['PETIT DEJ', 'APERO', 'BOISSONS']}
        src={[
          '../img/petitdej.png',
          '../img/apero.png',
          '../img/boisson.png'
        ]}
      />
    </div>
  </PageTemplate>

export default MenuCategory
