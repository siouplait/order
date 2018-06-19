import React from 'react'
import './Button.css'

const Button = ({ position, style, action, iconHeight, logoHeight, classIcon, icon, logo, text, children, className }) =>
  <div style={style} className={`${position} s-block-btn`}>
    {logo ? <img className="s-img-logo" src={logo} style={{ height: logoHeight + "vh" }} alt="logo" /> : ''}
    <button onClick={action} className={text || children ? `${className} s-btn` : `${className} s-btn-icon`}>
      {text || children}
      {
        icon ? <img
          src={icon}
          style={{ height: iconHeight + "em" }}
          className={classIcon ? classIcon : ""}
          alt="icon" /> : ''
      }
    </button>
  </div>

export default Button
