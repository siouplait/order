import React from 'react'
import './Button.css'

const Button = ({ children, ...rest }) =>
  <button className="s-btn s-facebook" {...rest}>
    {children}
  </button>

export default Button
