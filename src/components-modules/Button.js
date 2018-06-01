import React from 'react'

import '../css-modules/Button.css'

const Button = ({ children, ...rest }) =>
  <button {...rest}>
    {children}
  </button>

export default Button
