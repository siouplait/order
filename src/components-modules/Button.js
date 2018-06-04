import React from 'react'

import '../css-modules/Button.css'

const Button = ({ children, ...rest }) =>
  <button className="s-btn s-facebook" {...rest}>
    {children}
  </button>

export default Button
