import React from 'react'
import Button from './Button'

import './Input.css'

const Input = ({ action, icon, iconHeight, ...rest }) =>
  <div className="s-block-input-logo">
    <input className="s-input" {...rest}/>
    {icon ? <Button action={action} icon={icon} iconHeight={iconHeight} /> : ''}
  </div>

export default Input