import React from 'react'
import './HeaderText.css'

const HeaderText = ({title, subtitle}) =>
  <div>
    <h2 className="s-title-header" >{title}</h2>
    <h5 className="s-title-header" >{subtitle}</h5>
  </div>

export default HeaderText
