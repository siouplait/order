import React from 'react'

import './Thumbnail.css'

const Thumbnail = ({src, children}) =>
  <div className="thumbnail">
    <img className="img-thumbnail" src={src} alt="item image" />
    <p className="detail-thumbnail">{children}</p>
  </div>

export default Thumbnail
