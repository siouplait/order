import React from 'react'
import './ItemBlock.css'

const ItemBlock = ({ src, children }) =>
  <div className="thumbnail">
    <img className="img-thumbnail" src={src} alt="item image" style={{ height: "28vw"}}/>
    <p className="detail-thumbnail">{children}</p>
  </div>

export default ItemBlock
