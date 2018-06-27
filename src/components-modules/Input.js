import React from 'react'
import Button from './Button'

import './Input.css'

const Input = ({ width, action, icon, iconHeight, className, ...rest }) =>
  <div className="s-main-input-logo">
    <div style={{ width: width }} className={`s-block-input-logo ${className}`}>
      <input type="text" className="s-input" {...rest} />
      {icon ? <Button action={action} icon={icon} iconHeight={iconHeight} /> : ''}
    </div>
  </div>

export default Input