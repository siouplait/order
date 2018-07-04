import React from 'react'
import './Itemblock.css'

const Itemblock = ({ children, imgHeight, src, id, onClick }) =>
  <div className="s-thumbnail" onClick={onClick}>
    <img className="s-img-thumbnail" src={src} style={{ width: imgHeight }} alt={`logo${id}`}/>
    <p className="s-detail-thumbnail">{children}</p>
  </div>

export default Itemblock
