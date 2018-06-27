import React from 'react'
import './Itemblock.css'

const Itemblock = ({ children, imgHeight, src }) =>
  <div className="s-thumbnail">
    <img className="s-img-thumbnail" src={src} style={{ width: imgHeight }} alt="item image"/>
    <p className="s-detail-thumbnail">{children}</p>
  </div>

export default Itemblock