import React from 'react'
import './Button.css'

const Button = ({ children, ...rest }) =>
  <button {...rest}>
    {children}
  </button>

export default Button
