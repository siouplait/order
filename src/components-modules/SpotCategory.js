import React from 'react'
import './SpotCategory.css'

const SpotCategory = ({ items = [], src = [] }) =>
  <div className="s-block-spotcategory">
    {items.map((item, index) =>
      <div key={index} className="thumbnailcategory">
        <img className="img-thumbnail" src={src[index]} alt="item image" />
        <div className="detail-thumbnail">
          <span>{item}</span>
        </div>
      </div>
    )}
  </div>

export default SpotCategory
