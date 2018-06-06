import React from 'react'
import './Link.css'

// className = { props.block === }
const Link = ({ logo, block, children, ...rest }) =>
  <div className={block ? 's-link-block-white' : ''} {...rest}>
    <a className="s-link-highlighted" >{children}</a>
    {logo ? <img className="s-link-img-resize" src={logo} alt="logo link" /> : ''}
  </div>

export default Link
