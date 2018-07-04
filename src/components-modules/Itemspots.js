import React from 'react'
import { actions } from '../reduce/reducer'
import { Link } from '@reach/router'
// import heartFull from '../icon/heart_full.png'
// import heartVoid from '../icon/heart_void.png'
import './Itemspots.css'

const Itemspots = ({ srcBanner, srcLogo, linkId }) =>
  <Link to={`/menu-category/${linkId}`}>
    <div className="s-block-itemspots" style={{ backgroundImage: `url(${srcBanner})` }}>
      <div className="s-itemspots-div1" style={{ backgroundImage: `url(${srcLogo})` }}></div>
      {/* <div className="s-itemspots-div2" style={{ backgroundImage: `url(${heartFull})` }}></div> */}
    </div>
  </Link>

export default Itemspots
