import React from 'react'
import './Headertext.css'

const Headertext = ({title, subtitle}) =>
  <div>
    <h2 className="s-title-header" >{title}</h2>
    <h5 className="s-title-header" >{subtitle}</h5>
  </div>

export default Headertext