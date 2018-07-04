import React from 'react'
import PageTemplate from '../components-modules/PageTemplate'
import Input from '../components-modules/Input'
import Itemspots from '../components-modules/Itemspots'
import LinkTemplate from '../components-modules/LinkTemplate'
import btnSearch from '../icon/btn_search.svg'
import logoHeart from '../icon/logo_heart.svg'

const SpotsSearch = ({ places }) =>
  <PageTemplate nav className="s-bg-white">
    <div full="true" className="s-mt-2">
      <Input
        className="s-mt-1"
        icon={btnSearch}
        width="17em"
        iconHeight="1.3em"
        placeholder="Search"
      />
      <LinkTemplate
        to="/spots-search"
        className="s-mt-1"
        text="MES SPOTS"
        logo={logoHeart}
        imgHeight="1.3em"
      />
    </div>

    <div full="true" className="s-d-flex s-mt-3 s-pb-10">
      {places.map((e, i) => {
        return (
          <Itemspots
            key={`itemspots${i}`}
            linkId={e.id}
            srcBanner={e.banner.medium}
            srcLogo={e.logo.small}
          />
        )
      })}
    </div>
  </PageTemplate>

export default SpotsSearch
