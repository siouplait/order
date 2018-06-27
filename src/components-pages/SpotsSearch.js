import React from 'react'
import PageTemplate from '../components-modules/PageTemplate'
import Input from '../components-modules/Input'
import Itemspots from '../components-modules/Itemspots'
import LinkTemplate from '../components-modules/LinkTemplate'
import btnSearch from '../icon/btn_search.svg'
import logoHeart from '../icon/logo_heart.svg'
import imgSpot from '../img/imgSpot.png'
import {Link} from '@reach/router'

class SpotsSearch extends React.Component {
  render() {
    return (
      <PageTemplate nav className="s-bg-white">
        <div full className="s-mt-2">
          <Input
            className="s-mt-1"
            icon={btnSearch}
            width="17em"
            iconHeight="1.3em"
            placeholder="Search"
          />
          <LinkTemplate
            className="s-mt-1"
            text="MES SPOTS"
            logo={logoHeart}
            imgHeight="1.3em"
          />
        </div>

        <div full className="s-d-flex s-mt-3 s-pb-10">
          <Link to='/MenuCategory'>
            <Itemspots src={imgSpot} />
          </Link>
          <Itemspots src={imgSpot} />
          <Itemspots src={imgSpot} />
          <Itemspots src={imgSpot} />
          <Itemspots src={imgSpot} />
        </div>
      </PageTemplate>
    )
  }
}

export default SpotsSearch
