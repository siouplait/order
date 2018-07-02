import React from 'react'
import { Link } from '@reach/router'
// css
import './LinkTemplate.css'

const LinkTemplate = ({ to, className, imgHeight, action, logo, block, text, children, ...rest }) =>
  <div className={block ? `s-link-block-border ${className}` : `s-link-block ${className}`} {...rest}>
    <Link to={to} onClick={action} className="s-link-highlighted" >{text || children}</Link>
    {logo ? <img className="s-link-img-resize" style={{height: imgHeight}} src={logo} alt="logo link" /> : ''}
  </div>

export default LinkTemplate
