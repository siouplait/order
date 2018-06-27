import React from 'react'
import './Button.css'

const Button = ({ position, style, action, iconHeight, logoHeight, classIcon, icon, logo, text, children, className, block }) =>
  <div style={style} className={block ? `${position} s-block-btn s-border-block-btn` : `${position} s-block-btn`}>
    {logo ? <img className="s-img-logo" src={logo} style={{ height: logoHeight }} alt="logo" /> : ''}
    <button onClick={action} className={text || children ? `${className} s-btn` : `${className} s-btn-icon`}>
      {text || children}
      {
        icon ? <img
          src={icon}
          style={{ height: iconHeight}}
          className={classIcon ? classIcon : "s-icon-normal"}
          alt="icon" /> : ''
      }
    </button>
  </div>

export default Button
