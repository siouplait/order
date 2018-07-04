import React from 'react'
import { Link } from '@reach/router'
import './Itemspots.css'

const Itemspots = ({ srcBanner, srcLogo, linkId }) =>
  <Link to={`/menu-category/${linkId}`}>
    <div className="s-block-itemspots" style={{ backgroundImage: `url(${srcBanner})` }}>
      <div className="s-itemspots-div1" style={{ backgroundImage: `url(${srcLogo})` }}></div>
      {/* <div className="s-itemspots-div2" style={{ backgroundImage: `url(${heartFull})` }}></div> */}
    </div>
  </Link>

export default Itemspots
